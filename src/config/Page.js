import { Col, Row } from 'antd';

const Page = (props) => {

    let data = props.data

    return (
        <Row>
            <Col span={12} offset={6}>{data.groups}</Col>
        </Row>
    )

}

export default Page