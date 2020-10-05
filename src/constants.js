export const DEBOUNCE_MILLIS = 100;

export const EXAMPLE_HOME = 'example-home';
export const EXAMPLE_ADD = 'example-add';
export const EXAMPLE_EDIT = 'example-edit';

export const STATUS_CODE_PLUGIN_ERROR = -222;

// Content Types
export const CONTENT_TYPE_JSON = 'application/json';
export const CONTENT_TYPE_XML = 'application/xml';
export const CONTENT_TYPE_YAML = 'text/yaml';
export const CONTENT_TYPE_FILE = 'application/octet-stream';
export const CONTENT_TYPE_HTML = 'text/html';
export const CONTENT_TYPE_PLAIN = 'text/plain';
export const CONTENT_TYPE_OTHER = '*/*';

export const contentTypesMap = {
  [CONTENT_TYPE_HTML]: ['html', 'html'],
  [CONTENT_TYPE_FILE]: ['File', 'Binary File'],
  [CONTENT_TYPE_PLAIN]: ['Text', 'Plain'],
  [CONTENT_TYPE_JSON]: ['JSON', 'JSON'],
  [CONTENT_TYPE_OTHER]: ['Other', 'Other'],
  [CONTENT_TYPE_XML]: ['XML', 'XML'],
  [CONTENT_TYPE_YAML]: ['YAML', 'YAML'],
};

export const RESPONSE_CODE_REASONS = {
    // Special
    [STATUS_CODE_PLUGIN_ERROR]: 'Plugin Error',
  
    // 100s
  
    100: 'Continue',
    101: 'Switching Protocols',
  
    // 200s
  
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status',
    208: 'Already Reported',
    226: 'IM Used',
  
    // 300s
  
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    306: 'Switch Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',
  
    // 400s
  
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: "I'm a Teapot",
    421: 'Misdirected Request',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    425: 'Too Early',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    451: 'Unavailable For Legal Reasons',
  
    // 500s
  
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    510: 'Not Extended',
    511: 'Network Authentication Required',
  };