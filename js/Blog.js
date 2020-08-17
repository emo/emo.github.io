let content = document.getElementById("id_content");


var Blogs = [
    //Title,                            Data,       preview, description (html jobs)
    ["Create website party clan emo", "16.08.2020", "1.png", 'Create website party clan emo tab → "clan", division 1 and division 2.'],
    ["Create Blog", "16.08.2020", "2.png", ''],

]


for (var i = Blogs.length - 1; i >= 0; i--) {
    let div1 = document.createElement('div');
    div1.className = "blog_item";
    let div2 = document.createElement('div');
    div2.className = "header_blog";
    let div3 = document.createElement('div');
    div3.className = "title_blog";
    let div4 = document.createElement('div');
    div4.className = "data_blog";
    let div5 = document.createElement('div');
    div5.className = "content_blog";

    let img = document.createElement('img');
    img.className = "previe_blog";

    div3.innerHTML = Blogs[i][0];
    div4.innerHTML = Blogs[i][1];
    img.src = "res/Blog/" + Blogs[i][2];
    div5.innerHTML = Blogs[i][3];
 
    div2.append(div3);
    div2.append(div4);

    div1.append(div2);
    
    div1.append(img);
    div1.append(div5);
    content.append(div1);
}