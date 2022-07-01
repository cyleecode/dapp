import { callTerragridsApi, setMethodNotAllowedResponse } from '../../../../utils/api-config'

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            await callTerragridsApi(res, `accounts/${req.query.accountId}/terracells`)
            break
        default:
            setMethodNotAllowedResponse(res, ['GET'])
    }
}
