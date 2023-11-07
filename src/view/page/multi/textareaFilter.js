function Filter(text) {
    let textList = [];
    
    if (text.trim().length === 0) {
      alert("문자를 입력해주세요.");
    } else {
      if (text.includes("\n")) {
        textList = text.split("\n").filter(Boolean);
        for (let index = 0; index < textList.length; index++) {
          if (textList[index].includes("님이 방에 참가했습니다.")) {
            textList[index] = textList[index]
              .split("님이 방에 참가했습니다.")
              .filter(Boolean);
          }
        }
        textList = textList.flat();
      } else {
        textList = text
          .split("님이 방에 참가했습니다.")
          .filter(Boolean);
      }
    }
    return textList;
};

export default Filter;
  