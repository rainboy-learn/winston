const winston = require("winston")

const logger = winston.createLogger({
    level:'info',
    transports:[ new winston.transports.Console() ]
})

logger.info("hello world ,you can see it!")
logger.silly("hello world ,you can't see it!")
