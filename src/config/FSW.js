import { Input, Radio, Space } from "antd"
import Group from "../componments/Group"
import Question from "../componments/Question"
import { PhoneOutlined } from '@ant-design/icons'
import { TESTS } from "../constant/LanguageTest"

// eslint-disable-next-line
let age = 0, language = "", education = "a"

let age_options = [
    <Input bordered={false} placeholder="请输入您的年龄" suffix="岁"></Input>
]

let age_question = <Question title="年龄" options={age_options}></Question>

const onEducationChange = (e) => {
    education = e.target.value
};

let education_options = [
    <Radio.Group onChange={onEducationChange} value={education}>
        <Space direction="vertical">
            <Radio value="a">A</Radio>
            <Radio value="b">B</Radio>
            <Radio value="c">C</Radio>
            <Radio value="d">D</Radio>
        </Space>
    </Radio.Group>
]

let education_questions = <Question title="教育" options={education_options}></Question>

const onChange = (e) => {
    language = e.target.value
};

let language_options = [
    <div>
        <Radio.Group options={TESTS} onChange={onChange} defaultValue="IELTS" optionType="button" buttonStyle="solid">
        </Radio.Group>
        <Input prefix="听" />
        <Input prefix="说" />
        <Input prefix="读" />
        <Input prefix="写" />
    </div>
]

let language_question = <Question title="第一语言" options={language_options} alert="最低要求CLB 7 或 NCLC 7"></Question>

const FSW = {

    groups: [
        <Group title="A. 核心/人力资本因素 Core / human capital factors" additional="满分90" questions={[age_question, education_questions, language_question]}></Group>,
        <Group title="B. 附加分 Addtional points" additional="满分10"></Group>
    ],

    getTotal: () => {
        let score = 0
        if (age > 18) score += 15
        return score
    }

}

export default FSW