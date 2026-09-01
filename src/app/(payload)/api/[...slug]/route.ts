import config from '@payload-config'
import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST, REST_PUT } from '@payloadcms/next/routes'
import type { NextRequest } from 'next/server'

const getHandler = REST_GET(config)
const postHandler = REST_POST(config)
const patchHandler = REST_PATCH(config)
const deleteHandler = REST_DELETE(config)
const putHandler = REST_PUT(config)
const optionsHandler = REST_OPTIONS(config)

type RouteContext = {
  params: Promise<{ slug: string[] }>
}

export const GET = (request: NextRequest, context: RouteContext) => getHandler(request, context)
export const POST = (request: NextRequest, context: RouteContext) => postHandler(request, context)
export const PATCH = (request: NextRequest, context: RouteContext) => patchHandler(request, context)
export const DELETE = (request: NextRequest, context: RouteContext) => deleteHandler(request, context)
export const PUT = (request: NextRequest, context: RouteContext) => putHandler(request, context)
export const OPTIONS = (request: NextRequest, context: RouteContext) => optionsHandler(request, context)
