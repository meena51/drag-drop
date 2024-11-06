import { createPage, listPages, pagedetails, savePageContent, deletePage, updatePage } from "./page.services.js";

export const create = async (req, res) => {
    try {
        const pageBody = req.body;
        const page = await createPage(pageBody);
        res.json(page);
    } catch (error) {
        console.error("Error creating page:", error);
        res.status(500).json({ message: "Failed to create page" });
    }
};

export const list = async (req, res) => {
    const pages = await listPages();
    res.json(pages);
};

export const update = async (req, res) => {
    const { pageId } = req.params;
    const pageBody = req.body;
    const page = await updatePage(pageId, pageBody);
    res.json(page);
};

export const changeContent = async (req, res) => {
    const { pageId } = req.params;
    const pageContent = req.body.content;
    const updatedPage = await savePageContent(pageId, pageContent);
    res.json(updatedPage);
};

export const deletePageRecord = async (req, res) => {
    const { pageId } = req.params;
    const response = await deletePage(pageId);
    res.json(response);
};

export const details = async (req, res) => {
    const { pageId } = req.params;
    const pageDetails = await pagedetails(pageId);
    res.json(pageDetails);
};
