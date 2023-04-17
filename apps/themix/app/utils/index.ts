export enum Age {
  HourInSec = 60 * 60,
  DayInSec = 24 * 60 * 60,
  YearInSec = 365 * 24 * 60 * 60
}
export const isBrowser = typeof document !== 'undefined' || typeof window !== 'undefined';

export const parseStorage = (value: string): string | boolean => {
  if (value === 'true') {
    return true
  }
  if (value === 'false') {
    return false
  }
  return value
}

// Enum utilities
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
// export const isKeyOfEnum = <T>(key: string, enumeration: T): boolean => {
//   return Object.values(enumeration as keyof T).includes(key)
// }
//
// export const lenghtOfEnum = <T>(enumeration: T) => Object.keys(enumeration as keyof T).length / 2;
//
// // only for enum with key as string and number as value types
// export const getKeyOrValue = <T,>(enumeration: T, key: string | number): T[keyof T] => {
//   return enumeration[key as keyof T] // as string | number
// }
//
// const getKeysOfNumericEnums = (enumeration) => Object.keys(enumeration).filter((v) => isNaN(Number(v)));
// const getValuesOfNumericEnums = (enumeration) => Object.values(enumeration).filter((v) => isNaN(Number(v)));
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

// Trash --- ---
// export enum LogLevel {
//   error = 0,
//   warn = 1,
//   info = 2,
//   debug = 3,
// }
// // let printLevel = Math.ceil((lenghtOfEnum(LogLevel) - 1) / 2)
// let printLevel = lenghtOfEnum(LogLevel) - 1
// let defaultLevel = 2
// let defaultPrefix = '--'
// let defaultName = ''

// const k: string | number = getValuesOfNumericEnums(enumeration).find((nameKey, valueNumber) => {
//   console.log(enumeration[nameKey])
//   console.log(enumeration[valueNumber])
//   return valueNumber === level - 1
// })
// const getLevel = (level?: string | number) => {
//   let levelNumber
//   let levelLabel
//   if (typeof level === 'number') {
//     levelNumber = level
//     levelLabel = getKeyOrValue(LogLevel, level)
//   } else if (typeof level === 'string') {
//     levelLabel = level
//     levelNumber = getKeyOrValue(LogLevel, level)
//   }
//
//   // console.log('parsed:levelNumber', levelNumber)
//   // console.log('parsed:levelLabel', levelLabel)
//   // console.log('getLevel:this', this)
//
//   return [levelLabel, levelNumber] || Log.level
// }
// const getOpt = (config, name) => {
//   return config && config[name] ? config[name] : undefined
// }
//
// function getNewLog(config?) {
//   // logs(defaultLevel)(value, config)
//   if (config && typeof config !== 'object') {
//     console.error('Error: Object instante of Log must have configs?:{} as first argument only')
//     return
//   }
//   if (config?.level) {
//     console.warn('Warn: Object instance of Log will ignore the \'level\' config. Use: logInstance[level] - eg. logInstance.' + config.level)
//   }
//
//   return new Log('', config, 'isFromGetNewLog')
// }
// function Log(value?: any, config?) {
//   const isObject = this instanceof Log
//   const isFromGetNewLog = arguments[arguments.length - 1] === 'isFromGetNewLog'
//   if (isObject && !isFromGetNewLog) {
//     console.error('Is not possible create a instante of Log with "new", please use getNewLog() instead')
//     return
//   }
//   // console.log(args)
//   // if (this instanceof Log) {
//   //   // first instance turns config
//   //   config = value
//   //   value = ''
//   //
//   // } else {
//   //   console.log('is not instance')
//   // }
//   // console.log('config', config)
//   defaultName = config?.name ?? defaultName
//   defaultLevel = config?.level ?? defaultLevel
//   defaultPrefix = config?.prefix ?? defaultPrefix
//
//   logs(defaultLevel)(value, config)
// }

// const logs = (level) => (value, config) => {
//   // console.log('level', level)
//   // console.log('value', value)
//   // console.log('config', config)
//
//   config ??= {}
//   // console.log('config', config)
//   if (
//     Log.level >= Log.printLevel ||
//     (
//       config && config.level &&
//       (
//         config.level >= config.printLevel ||
//         config.level >= Log.printLevel ||
//         Log.level >= config.printLevel
//       )
//     )
//   ) {
//
//     return
//   }
//   // console.log('getOpt(config, \'level\')', getOpt(config, 'level'))
//   const optLevel = getOpt(config, 'level')
//   if (!optLevel) {
//     config.level = level
//   }
//   logsConditionally(value, config)
// }

// const logsConditionally = (value, config) => {
//   let [levelLabel, levelNumber] = getLevel.call(this, config.level)
//
//   // const key = getValuesOfNumericEnums(LogLevel).find((nameKey, valueNumber) => {
//   //   console.log(LogLevel[nameKey])
//   //   console.log(LogLevel[valueNumber])
//   //   return valueNumber === level - 1
//   // })
//   // console[key](key, value)
//
//   if (config?.prefix) {
//     console[levelLabel](config.prefix, levelLabel, value)
//   }
//   console[levelLabel](levelLabel, value)
// }
// console.log('a --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---')
// // Generates level functions (eg. Log.info)
// getKeysOfNumericEnums(LogLevel).forEach(nameKey => {
//   console.log('- b')
//   Log.prototype[nameKey] = logs(nameKey)
//   console.log('- - c')
//   Log[nameKey] = logs(nameKey)
//   console.log('- - - d')
// })
// console.log('e --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---')
//
// Log.prototype.prefix = defaultPrefix
// Log.prefix = defaultPrefix
//
// Log.prototype.level = defaultLevel
// Log.level = defaultLevel
//
// Log.prototype.printLevel = printLevel
// Log.printLevel = printLevel
//
// // const expLog = new Log()
// // const expLog = Log
//
// // error
// new Log('new')
// new Log()
//
// console.log(' --- ')
//
// // prints
// let newLog = getNewLog()
// newLog.info('print from newLog()')
// console.log(' --- ')
//
// let newLog2 = getNewLog({ level: 'warn' })
// newLog2.debug('print from newLog with invalid config')
// console.log(' --- ')
//
//
// Log('print from Log()')
// Log.debug("oi")
// console.log('     ')
//
// // Log.printLevel = 1
// Log.debug("will not appears")
// // Log.printLevel = 4
// Log.debug("will appears")
// console.log('     ')
//
// newLog.prefix = '--'
// newLog.info('print from newLog with prefix')
