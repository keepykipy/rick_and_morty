import { Error as ErrorComponent, MainTemplate, Container, BackwardButton } from '../ui/';

const Error = ({ statusCode }) => {
    const renderText = () => {
        if (statusCode) return `An error ${statusCode} occurred on server`

        return null;
    }

    return (
        <MainTemplate
            header={
                <Container>
                    <BackwardButton mt="32px" />
                </Container>
            }
        >
            <ErrorComponent errorText={renderText()} />
        </MainTemplate>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
