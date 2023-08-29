import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skGkeyhtiUybQkGlX5D27grqVZ4Y5bzcVo4KC0DVuH7cxONrQeRZJoAbVsGGq6J4tQto07SFkMO0msvFyx2oGoqSkAuLa6glBInMgB3T4OgmKJv8gOG0gm0HLFwDIFI8IkMTRONcSnEIA4pnfciFfO2emaIddFk4QYcvLDULgYBR15UV49Nk"
})
