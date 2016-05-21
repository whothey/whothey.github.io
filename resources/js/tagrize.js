module.exports = function tagrize(el)
{
    var tag = el.tagName.toLowerCase(),
        currentInner = el.innerHTML;

    // Just do <tagname>{content}</tagname>
    el.innerHTML = `&lt;${tag}&gt;<span class="tagged">${currentInner}</span>&lt;/${tag}&gt;`;
}
