import OptionType from "../constant/OptionType"
import Group from "../componments/Group"
import Question from "../componments/Question"
import { UserOutlined } from '@ant-design/icons'
// import { TESTS } from "../constant/LanguageTest"
import Option from "../componments/Option"

let score = 0

const onChange = (id, v) => {
    switch(id) {
        case "age":
            if(v >= 18) score += 30
            else score = 0
            break
    }
}

let age_question = <Question key="age" title="年龄" options={<Option optionId="age" onChange={onChange} type={OptionType.INPUT} prefix={<UserOutlined />} placeholder="请输入您的年龄" suffix="岁"></Option>}></Question>

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



const FSW = {

    groups: [
        <Group key="a" title="A. 核心/人力资本因素 Core / human capital factors" additional="满分90分" questions={[age_question]}></Group>,
        <Group key="b" title="B. 附加分 Addtional points" additional="满分10分"></Group>
    ],

    getTotal: () => {
        return score
    }

}

export default FSW