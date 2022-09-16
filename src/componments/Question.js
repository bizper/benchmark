import { Col, Row, Alert, Space } from 'antd'

const Question = (props) => {

    let getScore = props.getScore ? props.getScore : () => { return 0 }

    let options = props.options

    if (props.alert) {
        options.unshift(<Alert message={props.alert} type="warning" />)
    }

    if (props.tips) {
        options.push(<Alert message={props.tips} type="info" />)
    }

    return (
        <div className='question-box'>
            <Row justify="center" align="middle" gutter={[16, 16]}>
                <Col span={4}>{props.title}</Col>
                <Col span={10}><Space direction="vertical" size="middle" style={{ display: 'flex' }}>{options}</Space></Col>
                <Col span={4}>{getScore()}分</Col>
            </Row>
        </div>
    )

}

export default Question
