import { useState, useEffect, useRef } from 'react';
import FullPageFrame from "./components/fullPage/fullPageFrame"
import PagesManager from "./components/fullPageScrollController/pagesManager"
import { ScrollAnimation, ScrollIntoViewAnimation } from './utils/scrollAnimation';
import { HandleWheel } from './utils/handleWheel';

export default function App() {
  
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const componentPage1 = useRef();
  const componentPage2 = useRef();
  const componentPage3 = useRef();
  const componentPage4 = useRef();
  const componentPage5 = useRef();
  const componentPage6 = useRef();
  const componentPage7 = useRef();

  const componentList = [
    <FullPageFrame refComponent={componentPage1} pageId={'page1'} bgColor={'#777bfa'}> <h1>01</h1> </FullPageFrame>,
    <FullPageFrame refComponent={componentPage2} pageId={'page2'} bgColor={'#92DCE5'}> <h1>02</h1> </FullPageFrame>,
    <FullPageFrame refComponent={componentPage3} pageId={'page3'} bgColor={'#F8F7F9'}> <h1>03</h1> </FullPageFrame>,
    <FullPageFrame refComponent={componentPage4} pageId={'page4'} bgColor={'#F7EC59'}> <h1>04</h1> </FullPageFrame>,
    <FullPageFrame refComponent={componentPage5} pageId={'page5'} bgColor={'#FF66D8'}> <h1>05</h1> </FullPageFrame>,
    <FullPageFrame refComponent={componentPage6} pageId={'page6'} bgColor={'#ACBED8'}> <h1>06</h1> </FullPageFrame>,
    <FullPageFrame refComponent={componentPage7} pageId={'page7'} bgColor={'#F2D398'}> <h1>07</h1> </FullPageFrame>
  ]

  useEffect(() => {
    const element = componentList[currentPage].props.refComponent.current;
    const elementId = componentList[currentPage].props.pageId;
    const transitionTime = 1000;
    const animationType = "swing";
    ScrollAnimation(element, elementId, transitionTime, animationType)
    // ScrollIntoViewAnimation(element) // use scrollIntoView
  }, [currentPage]);

  return (
    <div 
      onWheel={(e) => HandleWheel(e, componentList, setCurrentPage, isScrolling, setIsScrolling, 700)}
    >
      <PagesManager
        mainComponentsList={componentList}
      />
    </div>
  )
}
