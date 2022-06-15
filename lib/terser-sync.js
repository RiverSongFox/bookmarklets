import { minify } from 'terser'
import deasync from 'deasync'

export default deasync(minify)
