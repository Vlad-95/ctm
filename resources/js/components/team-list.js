export const teamList = () => {
  const teamItemName = document.querySelectorAll('.js-name-sep');

  teamItemName.forEach((item) => {
    const name = item.textContent.trim();
    const nameArr = name.split(' ');
    item.innerHTML = `${nameArr[0]}</br>${nameArr[1]} ${nameArr[2]}`;
  });
};
