import { useEffect, useState } from "react"



const Calculator = ({category}) => {

    const [currentCategory, setCurrentCategory] = useState(0)
    const [selectedList, setSelectedList] = useState([])
    const [nextButtonState, setNextButtonState] = useState(true)
    const [severityScore, setSeverityScore] = useState(0)
    const [severityLevel, setSeverityLevel] = useState("")

    const onAnswerClick = (currentCategory, subCategory_id, choiceIndex, score) => {
        const objIndex = selectedList.findIndex((obj) => obj.category == currentCategory && obj.subCategory == subCategory_id)
        if (objIndex == -1){
            setSelectedList([...selectedList,
            {
                category: currentCategory,
                subCategory: subCategory_id,
                choiceIndex: choiceIndex,
                score: score,
            }])
        }
        else{
            selectedList[objIndex].choiceIndex = choiceIndex
            selectedList[objIndex].score = score            
            setSelectedList([...selectedList])
        }
    }

    function checkInList(currentCategory, subCategory_id, choiceIndex) {
        const listedIndex = selectedList.findIndex((element) => element.category == currentCategory && element.subCategory == subCategory_id && element.choiceIndex == choiceIndex)
        if (listedIndex == -1){
            return false
        }
        else
        {
            return true
        }
    }

    useEffect(() => {
        if(currentCategory < category.length){
        checkAllSelected(currentCategory)
        }
    },)

    useEffect(()=>{
        setCurrentCategory(currentCategory)
    }, [nextButtonState])


    function scrollToTop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    function checkAllSelected(currentCategory){
        const subCategoryLength = category[currentCategory].subCategory.length
        const count = selectedList.filter(item => item.category == currentCategory).length
        count == subCategoryLength ? setNextButtonState(false) : setNextButtonState(true)
    }

    const onBackClick = () => {
        if (currentCategory <= 0){
        setCurrentCategory(0)
        }
        else{
            setCurrentCategory(c => c-1)
            scrollToTop()
        }
    }

    const onNextClick = () => {
        setCurrentCategory(c => c+1)
        setNextButtonPressed(c => c+1)
    }

    const onSubmitClick = () => {
        let cb = 0
        setCurrentCategory(c => c+1)
        const dpc = Math.max.apply(Math, findSeverityScore(selectedList, 0))
        const ei = Math.max.apply(Math, findSeverityScore(selectedList, 1))
        const cbArray = findSeverityScore(selectedList, 2)
        for (let i = 0; i < cbArray.length; i++){
            cb += cbArray[i];
        }

        const se = dpc * ei + cb
        setSeverityScore(se)

        if (se < 2){
            setSeverityLevel("low")
        }
        else if (se >= 2 && se < 3){
            setSeverityLevel("mid")
        }
        else if (se >= 3 && se < 4){
            setSeverityLevel("high")
        }
        else {
            setSeverityLevel("veryHigh")
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });


    }

    function findSeverityScore(list, ids){
        const listArray = list.filter(item => item.category == ids).map((item) => item.score)
        return listArray
    }

    return (
        <div>
            {currentCategory < category.length ?
                <div className="category-container">
                    {
                    <div>
                        <h1 className="header-category">{category[currentCategory].categoryText}</h1>
                    </div>
                    }
                    <div>
                        {
                            category[currentCategory].subCategory.map((subCategory) =>
                            (
                                <div className="subcategory-container">
                                    <h2 className="header-topic">{subCategory.topicText}</h2>
                                    <div className="list-container">
                                        <ul key={subCategory.topicText}>
                                        {
                                            subCategory.choices.map((choice, choiceIndex) => (
                                                
                                                <li
                                                className={checkInList(currentCategory, subCategory.subCategoryId, choiceIndex) ? "list-choice-selected" :  "list-choice"}
                                                key={choice.id} onClick={() => onAnswerClick(currentCategory, subCategory.subCategoryId, choiceIndex, choice.score)}
                                                >
                                                    {choice.choiceText}
                                                </li>
                                            )
                                        )}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="Footer">
                        <div className="left">
                        {currentCategory === 0 ? <></>: <button className="back-button" onClick={() => onBackClick()}>Back</button>}
                        </div>
                        <div className="right">
                        {currentCategory === category.length-1 ?
                        <button className={nextButtonState ? "button-disabled" : "button"} disabled={nextButtonState} onClick={() => onSubmitClick()}>Submit</button> : <button className={nextButtonState ? "button-disabled" : "button"} disabled={nextButtonState} onClick={() => onNextClick()}>Next</button>}
                        </div>
                    </div>
                </div>
                : 

                //Final result page
                <div className="result-container">
                    <h1 className="breach-header">Breach</h1>
                    <div>
                        <h3>คะแนน: {severityScore}</h3>
                        <h3>ระดับความร้ายแรงของเหตุการละเมิดข้อมูลส่วนบุคคล:</h3>
                        {severityLevel === "low" ? <a className="low">ระดับต่ำ</a>: severityLevel === "mid" ? <a className="mid">ระดับกลาง</a>: severityLevel === "high" ? <a className="high">ระดับสูง</a>: <a className="veryHigh">ระดับสูงมาก</a>}
                        <div>
                            <br></br>
                            <p>Reference:</p>
                            <div>
                                <img src="/enisa.png" alt="ENISA Table"/>
                            </div>
                        </div>
                        <div>
                            <button className="back-button" onClick={() => location.reload()}>Restart</button>
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default Calculator