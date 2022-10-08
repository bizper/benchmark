import OptionType from "../constant/OptionType"
import Group from "../componments/Group"
import Question from "../componments/Question"
import { UserOutlined } from '@ant-design/icons'
import { TESTS, getCLB } from "../constant/LanguageTest"
import Option from "../componments/Option"
import { useState, useEffect, useRef } from "react"
import { Radio, Row, Col, Statistic } from "antd"



// let education_questions = <Question title="教育" options={education_options}></Question>

const FSW = () => {

    const ageRefs = useRef()
    const eduRefs = useRef()
    const flRefs = useRef()
    const slRefs = useRef()
    const expRefs = useRef()
    const lmiaRefs = useRef()
    const additionRefs = useRef()

    let [score, setScore] = useState(0)

    let [age, setAge] = useState(0)

    let age_question =
        <Question key="age" ref={ageRefs} title="年龄" getScore={() => {
            if (age >= 18 && age <= 35) return 12
            if (age > 35 && age <= 47) return 47 - age
            return 0
        }} options={
            <Option key="age" setValue={setAge} type={OptionType.INPUT} prefix={<UserOutlined />} placeholder="请输入您的年龄" suffix="岁"></Option>}>
        </Question>

    let [education, setEducation] = useState("")

    let education_question = <Question key="education" ref={eduRefs} title="教育" getScore={() => {
        switch (education) {
            case "a":
                return 5
            case "b":
                return 15
            case "c":
                return 19
            case "d":
            case "e":
                return 21
            case "f":
                return 22
            case "g":
            case "h":
                return 23
            case "i":
                return 25
            default:
                return 0
        }
    }} options={<Option type={OptionType.RADIO} setValue={setEducation} optionArray={[
        <Radio key="1" value="a">高中毕业</Radio>,
        <Radio key="2" value="b">高等教育毕业(1年)</Radio>,
        <Radio key="3" value="c">高等教育毕业(2年)</Radio>,
        <Radio key="4" value="d">高等教育毕业(3年)</Radio>,
        <Radio key="5" value="e">学士学位</Radio>,
        <Radio key="6" value="f">两个学历/学位(其一为3年及以上学习)</Radio>,
        <Radio key="7" value="g">硕士学位</Radio>,
        <Radio key="8" value="h">持照从业的专业学位(医学、兽医学、牙科、验光、法律、脊骨神经医学或药学)</Radio>,
        <Radio key="9" value="i">博士学位</Radio>
    ]}></Option>}>
    </Question>

    let [fl, setFL] = useState(['IELTS', 0, 0, 0, 0])

    let updateFL = (pos, v) => {
        let tmp = [...fl]
        tmp[pos] = v
        setFL(tmp)
    }

    let fl_question = <Question key="fl" ref={flRefs} title="第一语言" getScore={() => {
        let listening = getCLB(fl[0], "LISTENING", fl[1])
        let speaking = getCLB(fl[0], "SPEAKING", fl[2])
        let reading = getCLB(fl[0], "READING", fl[3])
        let writing = getCLB(fl[0], "WRITING", fl[4])
        let score = 0
        if (listening >= 7) score += (listening - 3) > 6 ? 6 : (listening - 3)
        if (speaking >= 7) score += (speaking - 3) > 6 ? 6 : (speaking - 3)
        if (reading >= 7) score += (reading - 3) > 6 ? 6 : (reading - 3)
        if (writing >= 7) score += (writing - 3) > 6 ? 6 : (writing - 3)
        return score
    }} options={[<Option key="flt" pos={0} options={TESTS} type={OptionType.RADIO} setValue={updateFL} defaultValue="IELTS"></Option>,
    <Option key="fll" pos={1} setValue={updateFL} type={OptionType.INPUT} prefix="听" suffix={fl[1] ? "等同于 CLB " + getCLB(fl[0], "LISTENING", fl[1]) : "等同于 CLB"}></Option>,
    <Option key="fls" pos={2} setValue={updateFL} type={OptionType.INPUT} prefix="说" suffix={fl[2] ? "等同于 CLB " + getCLB(fl[0], "LISTENING", fl[2]) : "等同于 CLB"}></Option>,
    <Option key="flr" pos={3} setValue={updateFL} type={OptionType.INPUT} prefix="读" suffix={fl[3] ? "等同于 CLB " + getCLB(fl[0], "LISTENING", fl[3]) : "等同于 CLB"}></Option>,
    <Option key="flw" pos={4} setValue={updateFL} type={OptionType.INPUT} prefix="写" suffix={fl[4] ? "等同于 CLB " + getCLB(fl[0], "LISTENING", fl[4]) : "等同于 CLB"}></Option>
    ]} alert="最低要求CLB 7 或 NCLC 7">
    </Question>

    let [sl, setSL] = useState(['IELTS', 0, 0, 0, 0])

    let updateSL = (pos, v) => {
        let tmp = [...sl]
        tmp[pos] = v
        setSL(tmp)
    }

    let sl_question = <Question key="sl" ref={slRefs} title="第二语言" getScore={() => {
        let listening = getCLB(sl[0], "LISTENING", sl[1])
        let speaking = getCLB(sl[0], "SPEAKING", sl[2])
        let reading = getCLB(sl[0], "READING", sl[3])
        let writing = getCLB(sl[0], "WRITING", sl[4])
        if (listening >= 5 && speaking >= 5 && reading >= 5 && writing >= 5) return 4
        return 0
    }} options={[<Option key="slt" pos={0} options={TESTS} type={OptionType.RADIO} setValue={updateSL} defaultValue="IELTS"></Option>,
    <Option key="sll" pos={1} setValue={updateSL} type={OptionType.INPUT} prefix="听" suffix={sl[1] ? "等同于 CLB " + getCLB(sl[0], "LISTENING", sl[1]) : "等同于 CLB"}></Option>,
    <Option key="sls" pos={2} setValue={updateSL} type={OptionType.INPUT} prefix="说" suffix={sl[2] ? "等同于 CLB " + getCLB(sl[0], "LISTENING", sl[2]) : "等同于 CLB"}></Option>,
    <Option key="slr" pos={3} setValue={updateSL} type={OptionType.INPUT} prefix="读" suffix={sl[3] ? "等同于 CLB " + getCLB(sl[0], "LISTENING", sl[3]) : "等同于 CLB"}></Option>,
    <Option key="slw" pos={4} setValue={updateSL} type={OptionType.INPUT} prefix="写" suffix={sl[4] ? "等同于 CLB " + getCLB(sl[0], "LISTENING", sl[4]) : "等同于 CLB"}></Option>
    ]} alert="最低要求CLB 5 或 NCLC 5">
    </Question>

    let [exp, setExp] = useState(0)

    let exp_question =
        <Question key="exp" ref={expRefs} title="工作经验" getScore={() => {
            if (exp === 1) return 9
            if (exp >= 2 && exp <= 3) return 11
            if (exp >= 4 && exp <= 5) return 13
            if (exp >= 6) return 15
            return 0
        }} options={
            <Option optionId="exp" setValue={setExp} type={OptionType.INPUT} prefix="包括加拿大及非加拿大的工作时长" placeholder="请填写年数" suffix="年"></Option>}>
        </Question>

    let [lmia, setLmia] = useState(false)

    let lmia_question = <Question key="lmia" ref={lmiaRefs} title="工作安排" getScore={() => {
        if (lmia) return 10
        return 0
    }} options={<Option type={OptionType.CHECKBOX} setValue={setLmia} text="我有LMIA以及加拿大工作offer"></Option>}>
    </Question>

    let [addition, setAddition] = useState([false, false, false, false, false, false])

    let updateAddition = (pos, v) => {
        let tmp = [...addition]
        tmp[pos] = v
        setAddition(tmp)
    }

    let addition_questions = <Question key="addition" ref={additionRefs} getScore={() => {
        let score = lmia ? 5 : 0
        if(addition[0]) score += 5
        if(addition[1]) score += 5
        if(addition[2]) score += 5
        if(addition[3]) score += 5
        if(addition[4]) score += 5
        if(addition[5]) score += 5
        if(score > 10) score = 10
        return score
    }} options={[
        <Option pos={0} setValue={updateAddition} type={OptionType.CHECKBOX} text="听说读写均在CLB 4及以上" subtitle="配偶或同居伴侣 - 语言(英语或法语）"></Option>,
        <Option pos={1} setValue={updateAddition} type={OptionType.CHECKBOX} text="在加拿大高中或高等教育院校，完成至少2年的全职学习" subtitle="主申请人 - 加拿大教育经历"></Option>,
        <Option pos={2} setValue={updateAddition} type={OptionType.CHECKBOX} text="在加拿大高中或高等教育院校，完成至少2年的全职学习" subtitle="配偶或同居伴侣 - 加拿大教育经历"></Option>,
        <Option pos={3} setValue={updateAddition} type={OptionType.CHECKBOX} text="持工签在加拿大至少1年的全职工作(NOC skill-level 0,A,B)" subtitle="主申请人 - 加拿大工作经验"></Option>,
        <Option pos={4} setValue={updateAddition} type={OptionType.CHECKBOX} text="持工签在加拿大至少1年的全职工作" subtitle="配偶或同居伴侣 - 加拿大工作经验"></Option>,
        <Option pos={5} setValue={updateAddition} type={OptionType.CHECKBOX} text="居住在加拿大、年满18岁、加拿大公民或PR" subtitle="主申请人/配偶或同居伴侣 - 加拿大亲属" tips="亲属包括 - 父母、祖父母、子女、孙子女、亲兄弟、亲姐妹、叔叔阿姨(血缘或姻亲关系)、侄子侄女"></Option>
    ]}>
    </Question>

    useEffect(() => {
        let tmp = 0
        tmp += ageRefs.current.getScore()
        tmp += eduRefs.current.getScore()
        tmp += flRefs.current.getScore()
        tmp += slRefs.current.getScore()
        tmp += expRefs.current.getScore()
        tmp += lmiaRefs.current.getScore()
        tmp += additionRefs.current.getScore()
        setScore(tmp)
    }, [age, education, fl, sl, exp, lmia, addition])

    let groups = [
        <Group key="a" title="A. 核心/人力资本因素 Core / human capital factors" additional="满分90分" questions={[age_question, education_question, fl_question, sl_question, exp_question, lmia_question]}></Group>,
        <Group key="b" title="B. 附加分 Addtional points" additional="满分10分" questions={[addition_questions]}></Group>
    ]

    return (
        <div>
            <Row>
                <Col span={12} offset={6}>{groups}</Col>
            </Row>
            <Row>
                <Col span={12} offset={12}><Statistic title="总分" value={score} /></Col>
            </Row>
        </div>
    )

}

export default FSW