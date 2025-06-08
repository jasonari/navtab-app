// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any) {
  if (error.name === 'ZodError') {
    // handle Zod error
    const fieldErrors = Object.keys(error.errors).map(
      (field) => error.errors[field].message
    )
    return fieldErrors.join('. ')
  } else if (
    error.name === 'PrismaClientKnownRequestError' &&
    error.code === 'P2002'
  ) {
    // handle Prisma error
    const field = error.meta?.target ? error.meta.target[0] : 'Field'
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`
  } else {
    // handle other errors
    return typeof error.message === 'string'
      ? error.message
      : JSON.stringify(error.message)
  }
}
