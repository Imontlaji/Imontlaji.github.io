function commit() {
    var textBoxValue = document.getElementById("#textbox").value
    if (textBoxValue !== "") {
        var texta = "https://www.google.com/search?&q=" + document.getElementById("#textbox").value;
        console.log(texta);
        window.open(texta);
    } else {
        mizhu.alert('错误', '请输入搜索内容');
    }
}

//设为首页
function SetHome(obj, url) {
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(url);
    } catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                mizhu.alert('错误', "抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }
        } else {
            mizhu.alert('错误', "抱歉，操作失败，您需要手动将[" + url + "]设置为首页。");
        }
    }
}

//收藏本站
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    } catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        } catch (e) {
            mizhu.alert('错误', "抱歉，加入收藏失败，请手动使用Ctrl+D进行添加");
        }
    }
}
