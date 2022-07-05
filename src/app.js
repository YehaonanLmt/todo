import data from "./data.json";
import Item from "./model.todo";

function App(root) {

  /**
   * @param datastore data.json 导入的json对象
   * @param nextId 每个对象的data-id
   */
  
  this.datastore = [...data];
  this.nextId = this.datastore.length + 1;
  let that = this;

  /**
   *@param onAdd 添加todo方法
   *向 datastore数组 push新的元素
   */

  this.onAdd = function () {
    const now = new Date().toLocaleString();
    this.datastore.push(new Item(`New Item ${this.nextId}`, now));
    this.nextId++;
    this.render();
  };

  /**
   *
   * @param onItemClick 方法点击title时弹出修改框
   */

  this.onItemClick = function (event) {
    console.log(event.target.dataset);
    // let a = that.datastore
    // console.log(a);
    const item = that.datastore[parseInt(event.target.dataset.id)];
    console.log(item);
    // const item = this.datastore;
    const title = prompt("Update todo item", item.title);
    if (title) {
      item.title = title;
      that.render();
    }
  };

  /**
   *
   * @param onDelete 点击x进行删除
   */

  this.onDelete = function (e) {
    console.log(e.target.dataset.id);
    // const item = that.datastore[parseInt(e.target.dataset.id)];
    that.datastore.splice(e.target.dataset.id, 1);
    that.render();
  };

  /**
   * @param render 方法进行页面刷新,将datastore中的数据导入到页面
   */

  this.render = function () {
    const items = this.datastore.map((item, idx) => {
      return `<div class="card">
        <div class="delete" data-id=${idx}>X</div>
        <div class="title" data-id=${idx}>${item.title}</div>
        <span class="label">${item.date}</span>
      </div>`;
    });
    root.innerHTML = items.join("");
    const deleteButtons = root.getElementsByClassName("delete");
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons.item(i).addEventListener("click", this.onDelete);
    }

    const titleElems = root.getElementsByClassName("title");
    for (let i = 0; i < titleElems.length; i++) {
      titleElems.item(i).addEventListener("click", this.onItemClick);
    }
  };
}
export default App;
