import * as styled from "./detailsStyle";

function ItemBox(props) {
  const detailData = props.data;
  const itemTreeData = JSON.parse(detailData.itemTree);
  const legendItemData = JSON.parse(detailData.legendItem);
  const arrow = '/assets/images/arrow-icon-24.svg';
  let itemTree;
  let legendItem;
  let treeList = [];
  let version = props.version;

  switch (version){
    case '1' :
      itemTree = itemTreeData.version1
      legendItem = legendItemData.version1
      break;
    case '2' :
      itemTree = itemTreeData.version2
      legendItem = legendItemData.version2
      break;
    case '3' :
      itemTree = itemTreeData.version3
      legendItem = legendItemData.version3
      break;
    case '4' :
      itemTree = itemTreeData.version4
      legendItem = legendItemData.version4
      break;
    default:
      break;
  }

  function getImg(key, src, mythic) {
    return (<styled.ItemImgStyle key={key} src={src} $mythic={mythic} />)
  }

  treeList.push(getImg(treeList.length, itemTree.mythic, "true"));
  treeList.push(<styled.SkillImgStyle key={treeList.length}  $size="32px" src={arrow}/>);
  treeList.push(getImg(treeList.length, itemTree.legend1, "false"));
  treeList.push(<styled.SkillImgStyle key={treeList.length}  $size="32px" src={arrow}/>);
  treeList.push(getImg(treeList.length, itemTree.legend2, "false"));

  return (
    <>
      <styled.ItemWrappingBoxStyle>
        <styled.ItemTreeBoxStyle>
          <styled.ItemTreeImgBoxStyle>
            {treeList}
          </styled.ItemTreeImgBoxStyle>
          <styled.ItemTreeRateBoxStyle>{itemTree.pickRate}</styled.ItemTreeRateBoxStyle>
          <styled.ItemTreeRateBoxStyle>{itemTree.winRate}</styled.ItemTreeRateBoxStyle>
        </styled.ItemTreeBoxStyle>
        
        <styled.LegendItemBoxStyle>
          <styled.LegendImgBoxStyle>
            {getImg(0, legendItem.src, "false")}
          </styled.LegendImgBoxStyle>
          <styled.LegendRateBoxStyle>{legendItem.pickRate}</styled.LegendRateBoxStyle>
        </styled.LegendItemBoxStyle>
      </styled.ItemWrappingBoxStyle>
    </>
  )
}

function ItemWrappingBox(props) {
  const detailData = props.data;

  return (
    <>
      <ItemBox data={detailData} version="1" />
      <ItemBox data={detailData} version="2" />
      <ItemBox data={detailData} version="3" />
      <ItemBox data={detailData} version="4" />
    </>
  )
}

// detailsMain.js에 뱉어내는
export default function ThirdArticle(props) {
  const detailData = props.data[0];


  return (
    <>
      <styled.OutBoxStyle $height="300px">
        <styled.ItemTitleBoxStyle>
          <styled.ItemTitleStyle>아이템 빌드</styled.ItemTitleStyle>
        </styled.ItemTitleBoxStyle>
        <styled.MiddleTitleBoxStyle>
            <styled.MiddleTitleWrappingBox $size="60%">
              <styled.MiddleTitleStyle $size="60%">아이템 트리</styled.MiddleTitleStyle>
              <styled.MiddleTitleStyle $size="20%">픽률</styled.MiddleTitleStyle>
              <styled.MiddleTitleStyle $size="20%">승률</styled.MiddleTitleStyle>
            </styled.MiddleTitleWrappingBox>
            <styled.MiddleTitleWrappingBox $size="40%">
              <styled.MiddleTitleStyle $size="60%">전설 아이템</styled.MiddleTitleStyle>
              <styled.MiddleTitleStyle $size="40%" $last="true">픽률</styled.MiddleTitleStyle>
            </styled.MiddleTitleWrappingBox>
          </styled.MiddleTitleBoxStyle>
        <styled.ItemArticleBoxStyle>
          <ItemWrappingBox data={detailData} />
        </styled.ItemArticleBoxStyle>
      </styled.OutBoxStyle>
    </>
  );
}
