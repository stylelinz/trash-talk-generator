module.exports = function getTrashTalk (careerOption) {
  const career = {
    engineer: {
      name: '工程師',
      task: ['加個按鈕', '加新功能', '切個版', '改一點 code']
    },
    designer: {
      name: '設計師',
      task: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計']
    },
    entrepreneur: {
      name: '創業家',
      task: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
    }
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常', '基基本本']

  function getRandomItemInArray (arr) {
    // '~~' == Math.floor()
    return arr[~~(Math.random() * arr.length)]
  }

  return `身為一個${career[careerOption].name}，${getRandomItemInArray(career[careerOption].task)}，${getRandomItemInArray(phrase)}吧!`
}
