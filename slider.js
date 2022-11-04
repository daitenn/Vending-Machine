vendingMachine();

class Element {
  constructor(name, price, imgUrl) {
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl;
  }
}

let elementList = [
  new Element("ヤムニョムチキン", "$4.0", "https://1.bp.blogspot.com/-DgQkaAeOGgc/X9lJVi_Yv9I/AAAAAAABc34/S867MFYTC30KImIFJWIMYgg29mGgyPj0gCNcBGAsYHQ/s400/food_yamunyomu_chiken.png"),
  new Element("うどん", "$3.0", "https://1.bp.blogspot.com/-XGjRT7F4-Kw/X9lJVQw7IiI/AAAAAAABc30/0am17JnAj20tGtMiDVeW91pGCKwhWGxvACNcBGAsYHQ/s400/food_udon_ippoin.png"),
  new Element("ソムタムサラダ", "$4.0", "https://1.bp.blogspot.com/-M28GZaegp38/X68afYkxWXI/AAAAAAABcQw/tSAxXfPaPp8GtBwzh9eieDieqWXxS47IgCNcBGAsYHQ/s400/food_thai_somtom_salad.png"),
  new Element("グラタン", "$5.0", "https://1.bp.blogspot.com/-SWCuSuacIRM/X5OcUEHRJzI/AAAAAAABb8Q/DXdF_e10S3gs3ggpPdbvQzGad79h-lbpQCNcBGAsYHQ/s400/food_kani_guratan_koura.png"),
  new Element("鳥刺し", "$6.0", "https://1.bp.blogspot.com/-2nW0IzZGLIw/X4aVjNsKsxI/AAAAAAABbwQ/pXeZrbOPZGkopVGWvR26JARATPFLjli7ACNcBGAsYHQ/s400/food_torisashi.png"),
  new Element("カレー", "$4.0", "https://1.bp.blogspot.com/-hpn9X8TUQW4/XzXk0_WmegI/AAAAAAABamU/k0e6lG3XzyYiph2LloEhjHWcVjmvLaUrACNcBGAsYHQ/s400/food_retoruto_curry_rice.png"),
  new Element("ペスカトーレ", "$4.0", "https://1.bp.blogspot.com/-RWs_4Pahu5o/XlyfunbOzFI/AAAAAAABXok/34sB189nT08OpZu7n-lz2GKZUce3ZSU8ACNcBGAsYHQ/s450/food_spaghetti_pescatora.png"),
  new Element("激辛ラーメン", "$4.0", "https://1.bp.blogspot.com/-AC1sM6NFLDg/XkZc3TcZh8I/AAAAAAABXQs/bBqpyDU0FTMpN5094w5pBwenw3Q96s4mgCNcBGAsYHQ/s400/food_ramen_gekikara.png"),
  new Element("キムチ鍋", "$4.0", "https://1.bp.blogspot.com/-YKJVR2s8onU/XiZ879vTRGI/AAAAAAABXJI/hf6TBR25XWgrjKhq_esz1kW6anfj0-N7ACNcBGAsYHQ/s400/nabe_kimuchi.png"),
];



let defaultImg = "https://thumb.ac-illust.com/e5/e5e9d3bd6c10faedc43aa0072fa63d2d_t.jpeg";

function vendingMachine() {
  let target = document.getElementById("target");
  target.innerHTML =
    `
    <div class="container bg-success d-flex flex-wrap col-10 col-sm-8 p-5 full-width vh-100 justify-content-center align-items-center">
        <div class="container d-flex col-sm-8 justify-content-center align-items-center text-center" id="image">
        </div>
        <div class="col-sm-4 text-justify">
            <div class="container text-center text-align-start">
              <div class="container d-flex justify-content-center text-nowrap" id="info"></div>
            </div>
            <div class="container full-width justify-content-center mt-5" >
                <div class="btns">
                    <div class="btn-light opd operator-btn" id="btnList" onclick=""></div>
                </div>
            </div>
        </div>
    </div>
    `
}

class Create {
  //slider
  static createSliderImg() {
    let sliderImg = document.getElementById("image");
    sliderImg.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hiddens");
    sliderImg.innerHTML =
      `
            <div id='main' class='main full-width my-3 pl-5' data-index='0'>
                <img class='col-10 imgFit' src="${defaultImg}" alt="">
            </div>
            <div id='extra' class='extra full-width'>
            </div>
        `
  }
  //名前及び値段の作成
  static infoCreate(object) {
    let info = document.getElementById("info");
    info.innerHTML =
      `
            <p>
                Name : ${object.name}</br>
                Price : ${object.price}
            </p>

        `
  }

  static createBtn() {
    let btnList = document.getElementById("btnList");
    btnList.innerHTML =
      `
            <div class="col-12"></div>
        `

    for (let i = 1; i < elementList.length + 1; i++) {
      btnList.innerHTML +=
        `
                <button class="btn btn-primary col-3 m-2">${i}</button>
            `
    }

    for (let i = 1; i < elementList.length + 1; i++) {
      btnList.querySelectorAll('.btn')[i - 1].addEventListener("click", function () {
        Action.sliderjump(i - 1);
      })
    }
  }
}

class Action {
  static sliderjump(input) {
    let main = document.getElementById("main");
    let index = parseInt(main.getAttribute("data-index"));

    let currentElement = document.createElement("div");
    currentElement.classList.add("d-flex", "justify-content-center");

    if (index == -1) {
      currentElement.innerHTML +=
        `
                <img class = "imgFit" src="defaultImg" alt="">
            `
    } else {
      currentElement.innerHTML +=
        `
                <img class = "imgFit col-12 d-flex justify-content-center" src="${elementList[index].imgUrl}" alt="">
            `
    }

    let animationType = Slider.getPosition(index, input);

    index = input;

    let nextElement = document.createElement("div");
    nextElement.classList.add("d-flex", "justify-content-center");
    nextElement.innerHTML =
      `
            <img class = "imgFit col-12 d-flex justify-content-center" src="${elementList[index].imgUrl}" alt="">
        `

    Create.infoCreate(elementList[index]);

    main.setAttribute("data-index", index.toString());

    this.animateMain(currentElement, nextElement, animationType);
  }

  static animateMain(currentElement, nextElement, animationType) {
    let main = document.getElementById("main");
    let extra = document.getElementById("extra");
    main.innerHTML = "";
    main.append(nextElement);

    extra.innerHTML = "";
    extra.append(currentElement);

    main.classList.add("expand-animation");
    extra.classList.add("deplete-animation");

    let sliderShow = document.getElementById("image");

    if (animationType === "right") {
      sliderShow.innerHTML = "";
      sliderShow.append(extra);
      sliderShow.append(main);
    } else if (animationType === "left") {
      sliderShow.innerHTML = "";
      sliderShow.append(main);
      sliderShow.append(extra);
    }
  }


}

class Slider {
  static getPosition(index, input) {
    if (index <= input) {
      return "right";
    } else {
      return "left";
    }
  }
}

Create.createSliderImg();
Create.createBtn();
