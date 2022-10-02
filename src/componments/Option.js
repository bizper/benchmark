import { Input, Checkbox, Radio, Space, Alert } from "antd"
import OptionType from "../constant/OptionType"

const Option = (props) => {

    let type = props.type

    const onChange = (e) => {
        props.setValue(e.target.value)
    }

    let option = []

    if (type === OptionType.INPUT) {
        option.push(<Input bordered={false} prefix={props.prefix} placeholder={props.placeholder} suffix={props.suffix} onChange={onChange}></Input>)
    }

    if (type === OptionType.RADIO) {
        if (props.options) {
            option.push(
                <Radio.Group options={props.options} onChange={onChange} defaultValue={props.defaultValue} optionType={props.optionType ? props.optionType : "button"} >
                </Radio.Group>
            )
        } else {
            option.push(
                <Radio.Group onChange={onChange}>
                    <Space direction={props.direction ? props.direction : "vertical"}>
                        {props.optionArray}
                    </Space>
                </Radio.Group>
            )
        }

    }

    if (type === OptionType.CHECKBOX) {
        option.push(<Checkbox onChange={onChange}>{props.text}</Checkbox>)
    }

    if (props.alert) {
        option.unshift(<Alert message={props.alert} type="warning" />)
    }

    if (props.tips) {
        option.push(<Alert message={props.tips} type="info" />)
    }

    return option

}

export default Option