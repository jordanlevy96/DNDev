const wiki = require('wikijs').default();

const { timedFunction } = require('./utils');

const getPageByName = async (name) => {
    const res = await timedFunction(wiki.page, name);
    return res;
};

const getPageInfo = async (name) => {
    const page = await getPageByName(name);

    const links = await page.links();
    const categories = await page.categories();
    const refs = await page.references();
    const content = await page.content();
    const raw = await page.rawContent();

    return {
        links
    }
};

const getSubcategories = async (name) => {
    const data = await timedFunction(wiki.pagesInCategory, name);
    const subcategories = data.filter((x) => x.startsWith('Category'));

    return subcategories;
};

const getGenderedNames = async (category) => {
    let names;
    if (category.includes('masculine') || category.includes('feminine')) {
        const data = await wiki.pagesInCategory(category);
        console.log(data);
        names = data;
    }
    
    return names;
};

const getNames = async (category) => {
    try {
        console.log(`Getting ${category}...`);
        let data;
        try {
            data = await wiki.pagesInCategory(category);
        }
        catch (error) {
            // data = await getPageInfo(category);
            console.log(`No pages in category found for ${category}`);
            return;
        }

        const subcategories = [];
        const names = [];

        for (const datum of data) {

            if (datum.match(/(?=.*Category)(?=.*names).*/g)) {
                // match iff Category && names are present
                const subcat = await getNames(datum);
                subcategories.push(subcat);
            }
            else {
                names.push(datum);
            }
        }

        console.log(`Scraped ${category}`);

        return {
            category,
            subcategories,
            names
        }
    }
    catch (error) {
        console.log(error.stack);
    }
};

const getNameLists = async (type) => {
    const listByCulture = await getSubcategories(`Category:${type} by culture`);
    const listByLanguage = await getSubcategories(`Category:${type} by language`);

    return {
        cultures: listByCulture,
        languages: listByLanguage
    }
};

const getRandomValue = (list) => {
    const i = Math.floor(Math.random() * (list.length - 1));
    return list[i];
}

const test = async () => {
    console.log('Initializing...');
    // const categories = await getPageInfo('Category:Names');
    // const names = await getCategoryContents();
    const givenNames = await timedFunction(getNameLists, 'Given names');
    const surnames = await timedFunction(getNameLists, 'Surnames');

    const randomCulture = getRandomValue(givenNames.cultures);
    const test = await getNames(randomCulture);

    console.log(test);

    console.log('Finished!');
};

module.exports = {
    test
};
