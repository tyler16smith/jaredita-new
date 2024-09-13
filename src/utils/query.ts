import { type NextRouter } from "next/router"

export const updateQueryParam = (key: string, value: string, router: NextRouter) => {
  const { pathname, query } = router
  query[key] = value
  router.push(
    {
      pathname,
      query,
    },
    undefined,
    { shallow: true },
  )
}

export const removeQueryParam = (key: string, router: NextRouter) => {
  const { pathname, query } = router
  delete query[key]
  router.push(
    {
      pathname,
      query,
    },
    undefined,
    { shallow: true },
  )
}