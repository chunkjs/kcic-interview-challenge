import {
    Card, CardTitle, CardBody, CardText
} from 'reactstrap';

function Error() {
    return (<><h1>Opps! 😭</h1>
        <Card
        >
            <CardBody>
                <CardTitle tag="h5">
                    Error 🛑
                </CardTitle>
                <CardText>
                    Not authorized to view this content
                </CardText>

            </CardBody>
        </Card>

    </>)
}

export default Error;