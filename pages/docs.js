import SwaggerUI from "swagger-ui-react";
import 'swagger-ui-react/swagger-ui.css'

export default function Docs() {
    return <div className={"docs-layout"}>
        <SwaggerUI url="/api/swagger" />;
    </div>
}