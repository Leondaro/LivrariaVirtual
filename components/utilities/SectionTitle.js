import { Generic, Box, Title } from "rbx";

const SectionTitle = ({children}) => {
    return (
        <Box shadowless={true} radiusless={true} marginless={true}>
            <Title size={3} textColor="info">
                <Generic as="span" className="padding-title">
                    {children}
                </Generic>
            </Title>
        </Box>
    );
}

export default SectionTitle;