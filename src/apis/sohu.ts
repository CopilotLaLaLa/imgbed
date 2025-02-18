import ImgApi from "../img_api";

const api: ImgApi = {
  name: '搜狐',
  transit: false,
  url: 'https://changyan.sohu.com/api/2/comment/attachment',
  field_name: 'file',
  resp_type: 'text',
  url_field: [''],
  code_field: [],
  success_code: 0,
  max_size: 4194304,
  extensions: [],
  file_name: "image.gif",
  file_type: "image/gif",
  bits: new Uint8Array([71, 73, 70, 56, 57, 97, 1, 32, 1, 32, 240, 32, 32, 255, 255, 255, 32, 32, 32, 33, 249, 4, 32, 32, 32, 32, 32, 44, 32, 32, 32, 32, 1, 32, 1, 32, 32, 2, 2, 68, 1, 32, 59]),
  final_handler: (text: string): string => {
    return text.substring(12, text.length - 4)
  }
}

export default api