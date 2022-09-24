import { Col, Row, Statistic } from 'antd';

const Page = (props) => {

    let data = props.data

    return (
        <div>
            <Row>
                <Col span={12} offset={6}>{data.groups}</Col>
            </Row>
            <Row>
                <Col span={12} offset={12}><Statistic title="总分" value={data.getTotal()} /></Col>
            </Row>
        </div>
    )

}

export default Page