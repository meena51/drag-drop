import Pages from "./page.modal.js";

export const createPage = async (pageBody) => {
    const slug = pageBody.name.toLowerCase().split(" ").join("-");
    pageBody.slug = slug;
    const page = new Pages(pageBody);
    const pageResponse = await page.save();
    return pageResponse;
};

export const listPages = async () => {
    const pages = await Pages.find({});
    return pages;
};

export const deletePage = async (pageId) => {
    const response = await Pages.findByIdAndDelete(pageId);
    return response;
};

export const updatePage = async (pageId, pageBody) => {
    const response = await Pages.findByIdAndUpdate(pageId, pageBody, { new: true });
    return response;
};

export const pagedetails = async (pageId) => {
    const page = await Pages.findById(pageId);
    return page;
};

export const savePageContent = async (pageId, pageContent) => {
    const response = await Pages.findByIdAndUpdate(pageId, { content: pageContent }, { new: true });
    return response;
};
