function menu1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mainMenu = "떡볶이";
      resolve(mainMenu);
    }, 1000);
  });
}

function menu2(menu1: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("로제" + menu1);
    }, 2000);
  });
}

function menu3(menu2: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("마라" + menu2);
    }, 3000);
  });
}

async function fetchMenu() {
  const allMenu1 = await menu1();
  console.log(allMenu1);
  const allMenu2 = await menu2(allMenu1);
  console.log(allMenu2);
  const allMenu3 = await menu3(allMenu2);
  console.log(allMenu3);
}

fetchMenu();
