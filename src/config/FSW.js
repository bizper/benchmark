import OptionType from "../constant/OptionType"
import Group from "../componments/Group"
import Question from "../componments/Question"
import { UserOutlined } from '@ant-design/icons'
// import { TESTS } from "../constant/LanguageTest"
import Option from "../componments/Option"
import { useState, useEffect, useRef } from "react"
import Page from "./Page"

// let education_options = [
//     <Radio.Group onChange={onEducationChange}>
//         <Space direction="vertical">
//             <Radio value="a">高中毕业</Radio>
//             <Radio value="b">高等教育毕业(1年)</Radio>
//             <Radio value="c">高等教育毕业(2年)</Radio>
//             <Radio value="d">高等教育毕业(3年)</Radio>
//             <Radio value="e">学士学位</Radio>
//             <Radio value="f">两个学历/学位(其一为3年及以上学习)</Radio>
//             <Radio value="g">硕士学位</Radio>
//             <Radio value="h">持照从业的专业学位(医学、兽医学、牙科、验光、法律、脊骨神经医学或药学)</Radio>
//             <Radio value="i">博士学位</Radio>
//         </Space>
//     </Radio.Group>
// ]

// let education_questions = <Question title="教育" options={education_options}></Question>

const FSW = () => {

    const refs = useRef()

    let [score, setScore] = useState(0)

    let [age, setAge] = useState(0)

    let age_question =
        <Question key="age" ref={refs} title="年龄" getScore={() => {
            if(age >= 18 && age <= 35) return 12
            if(age > 35 && age <= 47) return 47 - age
            return 0
        }} options={
            <Option optionId="age" setValue={setAge} type={OptionType.INPUT} prefix={<UserOutlined />} placeholder="请输入您的年龄" suffix="岁"></Option>}>
        </Question>

    useEffect(() => {
        let tmp = 0
        tmp += refs.current.getScore()
        // eslint-disable-next-line
        setScore(tmp)
    }, [age])

    let groups = [
        <Group key="a" title="A. 核心/人力资本因素 Core / human capital factors" additional="满分90分" questions={[age_question]}></Group>,
        <Group key="b" title="B. 附加分 Addtional points" additional="满分10分"></Group>
    ]

    return <Page data={groups} getTotal={score}></Page>

}

export default FSW