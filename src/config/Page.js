import { Col, Row, Statistic } from 'antd';

const Page = (props) => {

    return (
        <div>
            <Row>
                <Col span={12} offset={6}>{props.data}</Col>
            </Row>
            <Row>
                <Col span={12} offset={12}><Statistic title="总分" value={props.getTotal} /></Col>
            </Row>
        </div>
    )

}

export default Page