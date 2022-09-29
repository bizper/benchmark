import { PageHeader } from 'antd'

const Group = (props) => {

    return (
        <div>
            <PageHeader
                className="group-header"
                title={props.title}
                backIcon={false}
                subTitle={props.additional}
            />
            {props.questions}
        </div>
    )

}

export default Group