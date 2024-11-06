import {listPages} from '../page/page.services.js'
export const home = async(req,res)=>{
    const pages = await listPages();
    res.render('home',{title: 'Drag and Drop',pages});
}
export const editor = async(req,res)=>{
    const pages = await listPages();
    const selectedPage = pages.find(page=> page.id === req.params.pageId)
    res.render('editor',{title: 'Drag and Drop',pages,selectedPage});
}