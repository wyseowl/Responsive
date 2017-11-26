﻿
var rlo_1, rlo_2, rlo_3, rlo_4, rlo_5; /* Rounded realtime loan*/
var es; /* Extra savings*/
var eso;
var j1;
var jm1;
var jy1;
var ir1;
var cl1_1, cl1_2, cl1_3, cl1_4, cl1_5;

var plan1c = '{"Sheet1":[{"Country":"Afghanistan","Currency":"Afghanis","Exchange_Rate":0.010752,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Albania","Currency":"Leke","Exchange_Rate":0.005857,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Algeria","Currency":"Algerian Dinar","Exchange_Rate":0.006651,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"American Samoa","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Andorra","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Angola","Currency":"Kwanza","Exchange_Rate":0.004479,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Anguilla","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Antarctica","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Antigua and Barbuda","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Argentina","Currency":"Argentine Peso","Exchange_Rate":0.049902,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Armenia","Currency":"Dram","Exchange_Rate":0.001358,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Aruba","Currency":"Aruban Guilder","Exchange_Rate":0.405766,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Australia","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Earnings_threshold":21330,"Minimum_monthly_repayment":295.2},{"Country":"Austria","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Azerbaijan","Currency":"Azerbaijanian Manat","Exchange_Rate":0.458229,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Bahamas","Currency":"Bahamian Dollar","Exchange_Rate":0.72672,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Bahrain","Currency":"Bahrain Dinar","Exchange_Rate":1.926311,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Bangladesh","Currency":"Taka","Exchange_Rate":0.009255,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Barbados","Currency":"Barbados Dollar","Exchange_Rate":0.363216,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Belarus","Currency":"Belarusian Ruble","Exchange_Rate":0.388673,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Belgium","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Belize","Currency":"Belizean Dollar","Exchange_Rate":0.363238,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Benin","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Bermuda","Currency":"Bermudian Dollar","Exchange_Rate":0.72672,"Earnings_threshold":21330,"Minimum_monthly_repayment":295.2},{"Country":"Bhutan","Currency":"Bhutanese Ngultrum","Exchange_Rate":0.010817,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Bolivia","Currency":"Boliviano","Exchange_Rate":0.105206,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Bonaire Saint Eustatius and Saba","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Bosnia and Herzegovina","Currency":"Convertible Marka","Exchange_Rate":0.41185,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Botswana","Currency":"Pula","Exchange_Rate":0.06649,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Bouvet Island","Currency":"Norwegian Krone","Exchange_Rate":0.086478,"Earnings_threshold":21330,"Minimum_monthly_repayment":295.2},{"Country":"Brazil","Currency":"Brazilian Real","Exchange_Rate":0.205978,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"British Indian Ocean Territory","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Brunei","Currency":"Brunei Dollar","Exchange_Rate":0.293374,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Bulgaria","Currency":"Bulgarian Lev","Exchange_Rate":0.411828,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Burkina Faso","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Burundi","Currency":"Burundi Franc","Exchange_Rate":0.00045,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Cambodia","Currency":"Riel","Exchange_Rate":0.000188,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Cameroon","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Canada","Currency":"Canadian Dollar","Exchange_Rate":0.550092,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Cape Verde","Currency":"Cape Verde Escudo","Exchange_Rate":0.007304,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Cayman Islands","Currency":"Cayman Islands Dollar","Exchange_Rate":0.885847,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Central African Republic","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Chad","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Channel Islands","Currency":"British Pound","Exchange_Rate":1,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Chile","Currency":"Chilean Peso","Exchange_Rate":0.001067,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"China","Currency":"Yuan Renminbi","Exchange_Rate":0.109913,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Christmas Island","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Earnings_threshold":21330,"Minimum_monthly_repayment":295.2},{"Country":"Cocos (Keeling) Islands","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Earnings_threshold":21330,"Minimum_monthly_repayment":295.2},{"Country":"Colombia","Currency":"Colombian Peso","Exchange_Rate":0.000238,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Comoros","Currency":"Comorian Franc","Exchange_Rate":0.001637,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Congo","Currency":"Congolese Franc","Exchange_Rate":0.000822,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Congo Democratic Republic of","Currency":"Congolese Franc","Exchange_Rate":0.000822,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Cook Islands","Currency":"New Zealand Dollar","Exchange_Rate":0.503897,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Costa Rica","Currency":"Costa Rican Colon","Exchange_Rate":0.001341,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Cote d Ivoire","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Croatia","Currency":"Kuna","Exchange_Rate":0.106904,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Cuba","Currency":"Cuban Peso","Exchange_Rate":0.726441,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Curacao","Currency":"Antillean Guilder","Exchange_Rate":0.405989,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Cyprus","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Czech Republic","Currency":"Czech Koruna","Exchange_Rate":0.029803,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Denmark","Currency":"Danish Krone","Exchange_Rate":0.108234,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Djibouti","Currency":"Djiboutian Franc","Exchange_Rate":0.004087,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Dominica","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Dominican Republic","Currency":"Dominican Peso","Exchange_Rate":0.015829,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Ecuador","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Egypt","Currency":"Egyptian Pound","Exchange_Rate":0.07839,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"El Salvador","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Equatorial Guinea","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Eritrea","Currency":"Nafka","Exchange_Rate":0.048441,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Estonia","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Ethiopia","Currency":"Ethiopian Birr","Exchange_Rate":0.033406,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Faeroe Islands","Currency":"Danish Krone","Exchange_Rate":0.108234,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Falkland Islands","Currency":"Falkland Pound","Exchange_Rate":1,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Federated States of Micronesia","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Fiji","Currency":"Fiji Dollar","Exchange_Rate":0.346875,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Finland","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"France","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"French Guiana","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"French Polynesia","Currency":"CFP Franc","Exchange_Rate":0.006751,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"French Southern Territories","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Gabon","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Gambia","Currency":"Dalasi","Exchange_Rate":0.01733,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Georgia","Currency":"Lari","Exchange_Rate":0.31191,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Germany","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Ghana","Currency":"Ghanaian Cedi","Exchange_Rate":0.185343,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Gibraltar","Currency":"British Pound","Exchange_Rate":1,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Greece","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Greenland","Currency":"Danish Krone","Exchange_Rate":0.108234,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Grenada","Currency":"East Caribbean Dollar","Exchange_Rate":0.0269035,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Guadeloupe","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Guam","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Guatemala","Currency":"Quetzal","Exchange_Rate":0.095359,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Guinea","Currency":"Guinean Franc","Exchange_Rate":0.000106,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Guinea-Bissau","Currency":"CFA Franc (BCEAO)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Guyana","Currency":"Guyanese Dollar","Exchange_Rate":0.003507,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Haiti","Currency":"Gourde","Exchange_Rate":0.011617,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Heard and McDonald Islands","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Earnings_threshold":21330,"Minimum_monthly_repayment":295.2},{"Country":"Holy See (Vatican City State)","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Honduras","Currency":"Lempira","Exchange_Rate":0.031944,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Hong Kong","Currency":"Hong Kong Dollar","Exchange_Rate":0.09366,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Hungary","Currency":"Forint","Exchange_Rate":0.002585,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Iceland","Currency":"Icelandic Krona","Exchange_Rate":0.005937,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"India","Currency":"Indian Rupee","Exchange_Rate":0.010817,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Indonesia","Currency":"Indonesian Rupiah","Exchange_Rate":0.000055,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Iran","Currency":"Iranian Rial","Exchange_Rate":0.000025,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Iraq","Currency":"Iraqi Dinar","Exchange_Rate":0.000619,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Ireland","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Isle of Man","Currency":"British Pound","Exchange_Rate":1,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Israel","Currency":"New Israeli Shekel","Exchange_Rate":0.18921,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Italy","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Jamaica","Currency":"Jamaican Dollar","Exchange_Rate":0.005839,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Japan","Currency":"Yen","Exchange_Rate":0.006659,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Jordan","Currency":"Jordanian Dinar","Exchange_Rate":1.02439,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Kazakhstan","Currency":"Tenge","Exchange_Rate":0.002128,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Kenya","Currency":"Kenya Schilling","Exchange_Rate":0.007154,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Kiribati","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Korea Democratic Peoples Republic of","Currency":"Won Korea Dem. Rep","Exchange_Rate":0.466523,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Korea Republic of","Currency":"Won Korea Rep","Exchange_Rate":0.000626,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Kuwait","Currency":"Kuwaiti Dinar","Exchange_Rate":2.404511,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Kyrgyztan Republic","Currency":"Kyrgyzstan Som","Exchange_Rate":0.010351,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Lao PDR","Currency":"Kip","Exchange_Rate":0.000089,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Latvia","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Lebanon","Currency":"Lebanese Pound","Exchange_Rate":0.000482,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Lesotho","Currency":"Loti","Exchange_Rate":0.048968,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Liberia","Currency":"Liberian Dollar (US Dollar in use)","Exchange_Rate":0.721572,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Libya","Currency":"Libyan Dinar","Exchange_Rate":0.533691,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Liechtenstein","Currency":"Swiss Franc","Exchange_Rate":0.7393,"Earnings_threshold":21330,"Minimum_monthly_repayment":295.2},{"Country":"Lithuania","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Luxembourg","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Macau","Currency":"Patacas","Exchange_Rate":0.081203,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Macedonia","Currency":"Macedonian Denar","Exchange_Rate":0.013082,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Madagascar","Currency":"Malagasy Ariary","Exchange_Rate":0.000229,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Malawi","Currency":"Malawi Kwacha","Exchange_Rate":0.001026,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Malaysia","Currency":"Ringgit","Exchange_Rate":0.176653,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Maldives","Currency":"Rufiyaa","Exchange_Rate":0.047451,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Mali","Currency":"CFA Franc (BCEAO)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Malta","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Marshall Islands","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Martinique","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Mauritania","Currency":"Ouguiyas","Exchange_Rate":0.002079,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Mauritius","Currency":"Mauritius Rupee","Exchange_Rate":0.020468,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Mayotte","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Mexico","Currency":"Mexican Peso","Exchange_Rate":0.039321,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Moldova","Currency":"Moldovan Leu","Exchange_Rate":0.036589,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Monaco","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":21330,"Minimum_monthly_repayment":295.2},{"Country":"Mongolia","Currency":"Tugrik","Exchange_Rate":0.000346,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Montenegro","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Montserrat","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Morocco","Currency":"Moroccan Dirham","Exchange_Rate":0.074205,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Mozambique","Currency":"Metical","Exchange_Rate":0.012011,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Myanmar","Currency":"Kyat","Exchange_Rate":0.00059,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Namibia","Currency":"Namibian Dollar","Exchange_Rate":0.052086,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Nauru","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Nepal","Currency":"Nepalese Rupee","Exchange_Rate":0.006758,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Netherlands","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"New Caledonia","Currency":"CFP Franc","Exchange_Rate":0.006751,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"New Zealand","Currency":"New Zealand Dollar","Exchange_Rate":0.503897,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Nicaragua","Currency":"Gold Cordoba","Exchange_Rate":0.025472,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Niger","Currency":"CFA Franc (BCEAO)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Nigeria","Currency":"Nigerian Naira","Exchange_Rate":0.002881,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Niue","Currency":"New Zealand Dollar","Exchange_Rate":0.503897,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Norfolk Island","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Northern Mariana Islands","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Norway","Currency":"Norwegian Krone","Exchange_Rate":0.086478,"Earnings_threshold":21330,"Minimum_monthly_repayment":295.2},{"Country":"Oman","Currency":"Rial Omani","Exchange_Rate":1.886579,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Pakistan","Currency":"Pakistan Rupee","Exchange_Rate":0.006935,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"Palau","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Palestine","Currency":"New Israeli Shekel","Exchange_Rate":0.18921,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Panama","Currency":"Balboas","Exchange_Rate":0.726399,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Papua New Guinea","Currency":"Kina","Exchange_Rate":0.232474,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Paraguay","Currency":"Guarani","Exchange_Rate":0.000128,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Peru","Currency":"New Sol","Exchange_Rate":0.215743,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Philippines","Currency":"Philippine Peso","Exchange_Rate":0.015382,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Pitcairn","Currency":"New Zealand Dollar","Exchange_Rate":0.503897,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Poland","Currency":"Zloty","Exchange_Rate":0.185088,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Portugal","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Puerto Rico","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Qatar","Currency":"Qatar Riyal","Exchange_Rate":0.199496,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Reunion","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Romania","Currency":"Romanian Leu","Exchange_Rate":0.179364,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Russian Federation","Currency":"Russian Ruble","Exchange_Rate":0.010772,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Rwanda","Currency":"Rwanda Franc","Exchange_Rate":0.00093,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Saint Helena","Currency":"Saint Helena Pound","Exchange_Rate":1,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Saint Kitts and Nevis","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Saint Lucia","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Saint Martin (French part)","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Saint Pierre and Miquelon","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Saint Vincent and Grenadines","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Saint-Barthelemy","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Samoa","Currency":"Tala","Exchange_Rate":0.284972,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"San Marino","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Sao Tome and Principe","Currency":"Dobras","Exchange_Rate":0.000036,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Saudi Arabia","Currency":"Saudi Riyal","Exchange_Rate":0.193789,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Senegal","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Serbia","Currency":"Serbian Dinar","Exchange_Rate":0.006545,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Seychelles","Currency":"Seychelles Rupee","Exchange_Rate":0.054553,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Sierra Leone","Currency":"Leone","Exchange_Rate":0.000157,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Singapore","Currency":"Singapore Dollar","Exchange_Rate":0.527154,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Sint Maarten (Dutch part)","Currency":"Antilles Guilder","Exchange_Rate":0.405989,"Earnings_threshold":21330,"Minimum_monthly_repayment":295.2},{"Country":"Slovakia","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Slovenia","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Solomon Islands","Currency":"Solomon Islands Dollar","Exchange_Rate":0.091959,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Somalia","Currency":"Somali Shilling","Exchange_Rate":0.00122,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"South Africa","Currency":"Rand","Exchange_Rate":0.048952,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"South Georgia and the South Sandwich Islands","Currency":"British Pound","Exchange_Rate":1,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"South Sudan","Currency":"Sudanese Pound","Exchange_Rate":0.11866,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Spain","Currency":"Euro","Exchange_Rate":0.805942,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Sri Lanka","Currency":"Sri Lankan Rupee","Exchange_Rate":0.004982,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Sudan","Currency":"Sudanese Pound","Exchange_Rate":0.11866,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Suriname","Currency":"Surinam Dollar","Exchange_Rate":0.121021,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Svalbard and Jan Mayen Islands","Currency":"Norwegian Krone","Exchange_Rate":0.086478,"Earnings_threshold":21330,"Minimum_monthly_repayment":295.2},{"Country":"Swaziland","Currency":"Lilangeni","Exchange_Rate":0.048968,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Sweden","Currency":"Swedish Krona","Exchange_Rate":0.085709,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Switzerland","Currency":"Swiss Franc","Exchange_Rate":0.7393,"Earnings_threshold":21330,"Minimum_monthly_repayment":295.2},{"Country":"Syria","Currency":"Syrian Pound","Exchange_Rate":0.00399,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Taiwan","Currency":"Taiwan Dollar","Exchange_Rate":0.022472,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Tajikistan","Currency":"Somoni","Exchange_Rate":0.12336,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Thailand","Currency":"Thai Baht","Exchange_Rate":0.020611,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Timor-Leste","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Togo","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Tokelau","Currency":"New Zealand Dollar","Exchange_Rate":0.503897,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Tonga","Currency":"Pa’anga","Exchange_Rate":0.539768,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Trinidad and Tobago","Currency":"Trinidad & Tobago Dollar","Exchange_Rate":0.109733,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Tunisia","Currency":"Tunisian Dinar","Exchange_Rate":0.342335,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Turkey","Currency":"Turkish New Lira","Exchange_Rate":0.245285,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Turkmenistan","Currency":"Turkmenistan New Manat","Exchange_Rate":0.207394,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Turks and Caicos Islands","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Tuvalu","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Uganda","Currency":"Ugandan New Shilling","Exchange_Rate":0.000214,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Ukraine","Currency":"Hryvnia","Exchange_Rate":0.028636,"Earnings_threshold":3565,"Minimum_monthly_repayment":49.2},{"Country":"United Arab Emirates","Currency":"U.A.E. Dirham","Exchange_Rate":0.197766,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"United Kingdom","Currency":"British Pound","Exchange_Rate":1,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"United Republic of Tanzania","Currency":"Tanzanian Shilling","Exchange_Rate":0.000332,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"United States of America","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Uruguay","Currency":"Uruguayan Peso","Exchange_Rate":0.023927,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Uzbekistan","Currency":"Uzbekistan Sum","Exchange_Rate":0.000248,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Vanuatu","Currency":"Vatu","Exchange_Rate":0.00655,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Venezuela","Currency":"Bolivar Fuerte","Exchange_Rate":0.081222,"Earnings_threshold":10670,"Minimum_monthly_repayment":147.6},{"Country":"Vietnam","Currency":"Dong","Exchange_Rate":0.000033,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Virgin Islands (British)","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":17775,"Minimum_monthly_repayment":246},{"Country":"Virgin Islands (US)","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Wallis and Futuna Islands","Currency":"CFP Franc","Exchange_Rate":0.006751,"Earnings_threshold":14225,"Minimum_monthly_repayment":196.8},{"Country":"Western Sahara","Currency":"Moroccan Dirham","Exchange_Rate":0.074205,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Yemen","Currency":"Yemeni Rial","Exchange_Rate":0.003037,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Zambia","Currency":"Zambian Kwacha","Exchange_Rate":0.070314,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4},{"Country":"Zimbabwe","Currency":"Zimbabwean Dollar","Exchange_Rate":0.002007,"Earnings_threshold":7120,"Minimum_monthly_repayment":98.4}]}';
          obj = JSON.parse(plan1c);

var plan2pc = '{"Sheet2":[{"Country":"Afghanistan","Currency":"Afghanis","Exchange_Rate":0.010752,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Albania","Currency":"Leke","Exchange_Rate":0.005857,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Algeria","Currency":"Algerian Dinar","Exchange_Rate":0.006651,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"American Samoa","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Andorra","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Angola","Currency":"Kwanza","Exchange_Rate":0.004479,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Anguilla","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Antarctica","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Antigua and Barbuda","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Argentina","Currency":"Argentine Peso","Exchange_Rate":0.049902,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Armenia","Currency":"Dram","Exchange_Rate":0.001358,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Aruba","Currency":"Aruban Guilder","Exchange_Rate":0.405766,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Australia","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Lower_income_threshold":25200,"Upper_income_threshold":49200,"Minimum_monthly_repayment":241.2},{"Country":"Austria","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Azerbaijan","Currency":"Azerbaijanian Manat","Exchange_Rate":0.458229,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Bahamas","Currency":"Bahamian Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Bahrain","Currency":"Bahrain Dinar","Exchange_Rate":1.926311,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Bangladesh","Currency":"Taka","Exchange_Rate":0.009255,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Barbados","Currency":"Barbados Dollar","Exchange_Rate":0.363216,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Belarus","Currency":"Belarusian Ruble","Exchange_Rate":0.388673,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Belgium","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Belize","Currency":"Belizean Dollar","Exchange_Rate":0.363238,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Benin","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Bermuda","Currency":"Bermudian Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":25200,"Upper_income_threshold":49200,"Minimum_monthly_repayment":241.2},{"Country":"Bhutan","Currency":"Bhutanese Ngultrum","Exchange_Rate":0.010817,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Bolivia","Currency":"Boliviano","Exchange_Rate":0.105206,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Bonaire Saint Eustatius and Saba","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Bosnia and Herzegovina","Currency":"Convertible Marka","Exchange_Rate":0.41185,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Botswana","Currency":"Pula","Exchange_Rate":0.06649,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Bouvet Island","Currency":"Norwegian Krone","Exchange_Rate":0.086478,"Lower_income_threshold":25200,"Upper_income_threshold":49200,"Minimum_monthly_repayment":241.2},{"Country":"Brazil","Currency":"Brazilian Real","Exchange_Rate":0.205978,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"British Indian Ocean Territory","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Brunei","Currency":"Brunei Dollar","Exchange_Rate":0.293374,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Bulgaria","Currency":"Bulgarian Lev","Exchange_Rate":0.411828,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Burkina Faso","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Burundi","Currency":"Burundi Franc","Exchange_Rate":0.00045,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Cambodia","Currency":"Riel","Exchange_Rate":0.000188,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Cameroon","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Canada","Currency":"Canadian Dollar","Exchange_Rate":0.550092,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Cape Verde","Currency":"Cape Verde Escudo","Exchange_Rate":0.007304,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Cayman Islands","Currency":"Cayman Islands Dollar","Exchange_Rate":0.885847,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Central African Republic","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Chad","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Channel Islands","Currency":"British Pound","Exchange_Rate":1,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Chile","Currency":"Chilean Peso","Exchange_Rate":0.001067,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"China","Currency":"Yuan Renminbi","Exchange_Rate":0.109913,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Christmas Island","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Lower_income_threshold":25200,"Upper_income_threshold":49200,"Minimum_monthly_repayment":241.2},{"Country":"Cocos (Keeling) Islands","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Lower_income_threshold":25200,"Upper_income_threshold":49200,"Minimum_monthly_repayment":241.2},{"Country":"Colombia","Currency":"Colombian Peso","Exchange_Rate":0.000238,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Comoros","Currency":"Comorian Franc","Exchange_Rate":0.001637,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Congo","Currency":"Congolese Franc","Exchange_Rate":0.000822,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Congo Democratic Republic of","Currency":"Congolese Franc","Exchange_Rate":0.000822,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Cook Islands","Currency":"New Zealand Dollar","Exchange_Rate":0.503897,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Costa Rica","Currency":"Costa Rican Colon","Exchange_Rate":0.001341,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Cote d Ivoire","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Croatia","Currency":"Kuna","Exchange_Rate":0.106904,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Cuba","Currency":"Cuban Peso","Exchange_Rate":0.726441,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Curacao","Currency":"Antillean Guilder","Exchange_Rate":0.405989,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Cyprus","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Czech Republic","Currency":"Czech Koruna","Exchange_Rate":0.029803,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Denmark","Currency":"Danish Krone","Exchange_Rate":0.108234,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Djibouti","Currency":"Djiboutian Franc","Exchange_Rate":0.004087,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Dominica","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Dominican Republic","Currency":"Dominican Peso","Exchange_Rate":0.015829,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Ecuador","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Egypt","Currency":"Egyptian Pound","Exchange_Rate":0.07839,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"El Salvador","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Equatorial Guinea","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Eritrea","Currency":"Nafka","Exchange_Rate":0.048441,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Estonia","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Ethiopia","Currency":"Ethiopian Birr","Exchange_Rate":0.033406,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Faeroe Islands","Currency":"Danish Krone","Exchange_Rate":0.108234,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Falkland Islands","Currency":"Falkland Pound","Exchange_Rate":1,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Federated States of Micronesia","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Fiji","Currency":"Fiji Dollar","Exchange_Rate":0.346875,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Finland","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"France","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"French Guiana","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"French Polynesia","Currency":"CFP Franc","Exchange_Rate":0.006751,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"French Southern Territories","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Gabon","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Gambia","Currency":"Dalasi","Exchange_Rate":0.01733,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Georgia","Currency":"Lari","Exchange_Rate":0.31191,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Germany","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Ghana","Currency":"Ghanaian Cedi","Exchange_Rate":0.185343,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Gibraltar","Currency":"British Pound","Exchange_Rate":1,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Greece","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Greenland","Currency":"Danish Krone","Exchange_Rate":0.108234,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Grenada","Currency":"East Caribbean Dollar","Exchange_Rate":0.0269035,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Guadeloupe","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Guam","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Guatemala","Currency":"Quetzal","Exchange_Rate":0.095359,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Guinea","Currency":"Guinean Franc","Exchange_Rate":0.000106,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Guinea-Bissau","Currency":"CFA Franc (BCEAO)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Guyana","Currency":"Guyanese Dollar","Exchange_Rate":0.003507,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Haiti","Currency":"Gourde","Exchange_Rate":0.011617,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Heard and McDonald Islands","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Lower_income_threshold":25200,"Upper_income_threshold":49200,"Minimum_monthly_repayment":241.2},{"Country":"Holy See (Vatican City State)","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Honduras","Currency":"Lempira","Exchange_Rate":0.031944,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Hong Kong","Currency":"Hong Kong Dollar","Exchange_Rate":0.09366,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Hungary","Currency":"Forint","Exchange_Rate":0.002585,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Iceland","Currency":"Icelandic Krona","Exchange_Rate":0.005937,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"India","Currency":"Indian Rupee","Exchange_Rate":0.010817,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Indonesia","Currency":"Indonesian Rupiah","Exchange_Rate":0.000055,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Iran","Currency":"Iranian Rial","Exchange_Rate":0.000025,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Iraq","Currency":"Iraqi Dinar","Exchange_Rate":0.000619,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Ireland","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Isle of Man","Currency":"British Pound","Exchange_Rate":1,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Israel","Currency":"New Israeli Shekel","Exchange_Rate":0.18921,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Italy","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Jamaica","Currency":"Jamaican Dollar","Exchange_Rate":0.005839,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Japan","Currency":"Yen","Exchange_Rate":0.006659,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Jordan","Currency":"Jordanian Dinar","Exchange_Rate":1.02439,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Kazakhstan","Currency":"Tenge","Exchange_Rate":0.002128,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Kenya","Currency":"Kenya Schilling","Exchange_Rate":0.007154,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Kiribati","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Korea Democratic Peoples Republic of","Currency":"Won Korea Dem. Rep","Exchange_Rate":0.466523,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Korea Republic of","Currency":"Won Korea Rep","Exchange_Rate":0.000626,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Kuwait","Currency":"Kuwaiti Dinar","Exchange_Rate":2.404511,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Kyrgyztan Republic","Currency":"Kyrgyzstan Som","Exchange_Rate":0.010351,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Lao PDR","Currency":"Kip","Exchange_Rate":0.000089,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Latvia","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Lebanon","Currency":"Lebanese Pound","Exchange_Rate":0.000482,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Lesotho","Currency":"Loti","Exchange_Rate":0.048968,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Liberia","Currency":"Liberian Dollar (US Dollar in use)","Exchange_Rate":0.721572,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Libya","Currency":"Libyan Dinar","Exchange_Rate":0.533691,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Liechtenstein","Currency":"Swiss Franc","Exchange_Rate":0.7393,"Lower_income_threshold":25200,"Upper_income_threshold":49200,"Minimum_monthly_repayment":241.2},{"Country":"Lithuania","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Luxembourg","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Macau","Currency":"Patacas","Exchange_Rate":0.081203,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Macedonia","Currency":"Macedonian Denar","Exchange_Rate":0.013082,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Madagascar","Currency":"Malagasy Ariary","Exchange_Rate":0.000229,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Malawi","Currency":"Malawi Kwacha","Exchange_Rate":0.001026,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Malaysia","Currency":"Ringgit","Exchange_Rate":0.176653,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Maldives","Currency":"Rufiyaa","Exchange_Rate":0.047451,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Mali","Currency":"CFA Franc (BCEAO)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Malta","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Marshall Islands","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Martinique","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Mauritania","Currency":"Ouguiyas","Exchange_Rate":0.002079,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Mauritius","Currency":"Mauritius Rupee","Exchange_Rate":0.020468,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Mayotte","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Mexico","Currency":"Mexican Peso","Exchange_Rate":0.039321,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Moldova","Currency":"Moldovan Leu","Exchange_Rate":0.036589,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Monaco","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":25200,"Upper_income_threshold":49200,"Minimum_monthly_repayment":241.2},{"Country":"Mongolia","Currency":"Tugrik","Exchange_Rate":0.000346,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Montenegro","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Montserrat","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Morocco","Currency":"Moroccan Dirham","Exchange_Rate":0.074205,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Mozambique","Currency":"Metical","Exchange_Rate":0.012011,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Myanmar","Currency":"Kyat","Exchange_Rate":0.00059,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Namibia","Currency":"Namibian Dollar","Exchange_Rate":0.052086,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Nauru","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Nepal","Currency":"Nepalese Rupee","Exchange_Rate":0.006758,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Netherlands","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"New Caledonia","Currency":"CFP Franc","Exchange_Rate":0.006751,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"New Zealand","Currency":"New Zealand Dollar","Exchange_Rate":0.503897,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Nicaragua","Currency":"Gold Cordoba","Exchange_Rate":0.025472,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Niger","Currency":"CFA Franc (BCEAO)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Nigeria","Currency":"Nigerian Naira","Exchange_Rate":0.002881,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Niue","Currency":"New Zealand Dollar","Exchange_Rate":0.503897,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Norfolk Island","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Northern Mariana Islands","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Norway","Currency":"Norwegian Krone","Exchange_Rate":0.086478,"Lower_income_threshold":25200,"Upper_income_threshold":49200,"Minimum_monthly_repayment":241.2},{"Country":"Oman","Currency":"Rial Omani","Exchange_Rate":1.886579,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Pakistan","Currency":"Pakistan Rupee","Exchange_Rate":0.006935,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"Palau","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Palestine","Currency":"New Israeli Shekel","Exchange_Rate":0.18921,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Panama","Currency":"Balboas","Exchange_Rate":0.726399,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Papua New Guinea","Currency":"Kina","Exchange_Rate":0.232474,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Paraguay","Currency":"Guarani","Exchange_Rate":0.000128,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Peru","Currency":"New Sol","Exchange_Rate":0.215743,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Philippines","Currency":"Philippine Peso","Exchange_Rate":0.015382,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Pitcairn","Currency":"New Zealand Dollar","Exchange_Rate":0.503897,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Poland","Currency":"Zloty","Exchange_Rate":0.185088,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Portugal","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Puerto Rico","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Qatar","Currency":"Qatar Riyal","Exchange_Rate":0.199496,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Reunion","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Romania","Currency":"Romanian Leu","Exchange_Rate":0.179364,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Russian Federation","Currency":"Russian Ruble","Exchange_Rate":0.010772,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Rwanda","Currency":"Rwanda Franc","Exchange_Rate":0.00093,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Saint Helena","Currency":"Saint Helena Pound","Exchange_Rate":1,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Saint Kitts and Nevis","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Saint Lucia","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Saint Martin (French part)","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Saint Pierre and Miquelon","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Saint Vincent and Grenadines","Currency":"East Caribbean Dollar","Exchange_Rate":0.269035,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Saint-Barthelemy","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Samoa","Currency":"Tala","Exchange_Rate":0.284972,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"San Marino","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Sao Tome and Principe","Currency":"Dobras","Exchange_Rate":0.000036,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Saudi Arabia","Currency":"Saudi Riyal","Exchange_Rate":0.193789,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Senegal","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Serbia","Currency":"Serbian Dinar","Exchange_Rate":0.006545,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Seychelles","Currency":"Seychelles Rupee","Exchange_Rate":0.054553,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Sierra Leone","Currency":"Leone","Exchange_Rate":0.000157,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Singapore","Currency":"Singapore Dollar","Exchange_Rate":0.527154,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Sint Maarten (Dutch part)","Currency":"Antilles Guilder","Exchange_Rate":0.405989,"Lower_income_threshold":25200,"Upper_income_threshold":49200,"Minimum_monthly_repayment":241.2},{"Country":"Slovakia","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Slovenia","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Solomon Islands","Currency":"Solomon Islands Dollar","Exchange_Rate":0.091959,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Somalia","Currency":"Somali Shilling","Exchange_Rate":0.00122,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"South Africa","Currency":"Rand","Exchange_Rate":0.048952,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"South Georgia and the South Sandwich Islands","Currency":"British Pound","Exchange_Rate":1,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"South Sudan","Currency":"Sudanese Pound","Exchange_Rate":0.11866,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Spain","Currency":"Euro","Exchange_Rate":0.805942,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Sri Lanka","Currency":"Sri Lankan Rupee","Exchange_Rate":0.004982,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Sudan","Currency":"Sudanese Pound","Exchange_Rate":0.11866,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Suriname","Currency":"Surinam Dollar","Exchange_Rate":0.121021,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Svalbard and Jan Mayen Islands","Currency":"Norwegian Krone","Exchange_Rate":0.086478,"Lower_income_threshold":25200,"Upper_income_threshold":49200,"Minimum_monthly_repayment":241.2},{"Country":"Swaziland","Currency":"Lilangeni","Exchange_Rate":0.048968,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Sweden","Currency":"Swedish Krona","Exchange_Rate":0.085709,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Switzerland","Currency":"Swiss Franc","Exchange_Rate":0.7393,"Lower_income_threshold":25200,"Upper_income_threshold":49200,"Minimum_monthly_repayment":241.2},{"Country":"Syria","Currency":"Syrian Pound","Exchange_Rate":0.00399,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Taiwan","Currency":"Taiwan Dollar","Exchange_Rate":0.022472,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Tajikistan","Currency":"Somoni","Exchange_Rate":0.12336,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Thailand","Currency":"Thai Baht","Exchange_Rate":0.020611,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Timor-Leste","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Togo","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001228,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Tokelau","Currency":"New Zealand Dollar","Exchange_Rate":0.503897,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Tonga","Currency":"Pa’anga","Exchange_Rate":0.539768,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Trinidad and Tobago","Currency":"Trinidad & Tobago Dollar","Exchange_Rate":0.109733,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Tunisia","Currency":"Tunisian Dinar","Exchange_Rate":0.342335,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Turkey","Currency":"Turkish New Lira","Exchange_Rate":0.245285,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Turkmenistan","Currency":"Turkmenistan New Manat","Exchange_Rate":0.207394,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Turks and Caicos Islands","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Tuvalu","Currency":"Australian Dollar","Exchange_Rate":0.539768,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Uganda","Currency":"Ugandan New Shilling","Exchange_Rate":0.000214,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Ukraine","Currency":"Hryvnia","Exchange_Rate":0.028636,"Lower_income_threshold":4200,"Upper_income_threshold":8200,"Minimum_monthly_repayment":40.2},{"Country":"United Arab Emirates","Currency":"U.A.E. Dirham","Exchange_Rate":0.197766,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"United Kingdom","Currency":"British Pound","Exchange_Rate":1,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"United republic of Tanzania","Currency":"Tanzanian Shilling","Exchange_Rate":0.000332,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"United States of America","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Uruguay","Currency":"Uruguayan Peso","Exchange_Rate":0.023927,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Uzbekistan","Currency":"Uzbekistan Sum","Exchange_Rate":0.000248,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Vanuatu","Currency":"Vatu","Exchange_Rate":0.00655,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Venezuela","Currency":"Bolivar Fuerte","Exchange_Rate":0.081222,"Lower_income_threshold":12600,"Upper_income_threshold":24600,"Minimum_monthly_repayment":120.6},{"Country":"Vietnam","Currency":"Dong","Exchange_Rate":0.000033,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Virgin Islands (British)","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":21000,"Upper_income_threshold":41000,"Minimum_monthly_repayment":201},{"Country":"Virgin Islands (US)","Currency":"U.S. Dollar","Exchange_Rate":0.72672,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Wallis and Futuna Islands","Currency":"CFP Franc","Exchange_Rate":0.006751,"Lower_income_threshold":16800,"Upper_income_threshold":32800,"Minimum_monthly_repayment":160.8},{"Country":"Western Sahara","Currency":"Moroccan Dirham","Exchange_Rate":0.074205,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Yemen","Currency":"Yemeni Rial","Exchange_Rate":0.003037,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Zambia","Currency":"Zambian Kwacha","Exchange_Rate":0.070314,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4},{"Country":"Zimbabwe","Currency":"Zimbabwean Dollar","Exchange_Rate":0.002007,"Lower_income_threshold":8400,"Upper_income_threshold":16400,"Minimum_monthly_repayment":80.4}]}';
            obj2 = JSON.parse(plan2pc);

/*********************************************** EXAMPLE INPUTS ************************************************/

/***************** DETERMINED ***************/
var td = "per year";
var td_ar = "per month";
var ys = [2005, 2009, 2014, 2014, "Empty"];
var l = ["England", "Scotland", "England", "England", "Empty"];
var pg = ["Empty", "Empty", "No", "Yes", "Empty"];
var age_y = [1991, 1991, 1991, 1991, 1991];
var age_m = [08, 08, 08, 08, 08];
var currentTime= new Date();
var ye = [2005, 2014, 2016, 2016, "Empty"];
var c = "United Kingdom";
var ge = 45000;
var ar = 50;
var curr_ar = "British Pound";
var curr_bulk = "British Pound";
var bulk = 100;
var dl = [15000, 25000, 25000, 25000, 0]; /* Displayed Loan on Government Website*/
var currentTime= new Date();
var thisyear = (new Date().getFullYear());  /* Current Year*/
var tp = (Math.ceil(Math.abs(currentTime - (new Date('04/01/'+(thisyear)))) / (1000 * 3600 * 24)))/365.25; /* Proportion of year passed*/
var paye = "Yes"; /* Whether PAYE is used*/
var ip1 = [0.0125, 0.0125];  /* Plan 1 Interest Rates before September and after September respectively*/
var ip2 = 0.03; /* Plan 2 Interest Rates*/
var ipl = 0.03; /* PG Interest Rates*/
var rpi = [0.016, 0.031] /* Retail Price Index before September and after September respectively*/
var rp = [0.09, 0.09, 0.06]; /* Repayment proportion Plan1, Plan2 and PG respectively*/

/***************** UNDETERMINED ***************/
var loantype = ["loantype_1", "loantype_2", "loantype_3", "loantype_4", "loantype_5"];
var age = ["age_1", "age_2", "age_3", "age_4", "age_5"];
var cancelled = [0,0,0,0,0];
var cancelledy = [0,0,0,0,0];
var cancelledm = [0,0,0,0,0];
var cancelledl = [0,0,0,0,0];
var curr; /* Currency for gross earnings*/
var exch; /* Exchange Rate*/
var exch_ar; /* Exchange Rate for additional repayments*/
var leth = [0,0,0]; /* Lower earnings threshold*/
var uet; /* Upper earnings threshold for Plan 2 Loan*/
var gef; /* Currency adjusted gross earnings*/
var arf; /* Currency adjusted additional repayments*/
var bulkf;
var exch_bulk;
var rlt = 0; /* Realtime Loan Total - as of today*/
var rl = [0,0,0,0,0]; /* Realtime Loan - as of today*/
var tdn; /* Numeric time adjustment for gross earnings*/
var tdn_ar; /* Numeric time adjustment for additional repayments*/
var ifrac;
var mmr_init = 0; /* Initial Mandatory Monthly repayments*/

  /************************************************ TIME DETERMINATION *****************************************/

function timef(td, td_ar) {
  
  if (td=="per year") {
    tdn=1;
  }
  else if (td=="per month") {
    tdn=12;
  }
  else if (td=="per week") {
    tdn=52;
  }
  if (td_ar=="per year") {
    tdn_ar=1;
  }
  else if (td_ar=="per month") {
    tdn_ar=12;
  }
  else if (td_ar=="per week") {
    tdn_ar=52;
  }
 return "Time adjustment for gross income = "+tdn+". Time adjustment for additional repayment = "+tdn_ar;
}

document.getElementById("timefun").innerHTML = timef(td=td,td_ar=td_ar);

  /************************************************ LOAN TYPE *****************************************/

function loantypef(ys, l, pg){

    for (i = 0; i < 5; i++){
    if (ys[i]=="Empty"){
	loantype[i]="NA";
    }
    else{
    if (ys[i]=="Before 1999") {
          alert("Your loan type is mortgage style loan. Please see the student loans repayment website for further information.");
      return;
    }
    else if (ys[i]>=1999 && (l[i]=="Northern Ireland" || l[i]=="Scotland")) {
      loantype[i]="Plan 1";
    }
    else if (ys[i]>=1999 && ys[i]<=2012 && (l[i]=="Wales" || l[i]=="England")) {
      loantype[i]="Plan 1";
    }
    else if (ys[i]>2012 && l[i]=="England" && pg[i]=="No") {
      loantype[i]="Plan 2";
    }
    else if (ys[i]>2012 && l[i]=="England" && pg[i]=="Yes") {
      loantype[i]="Postgraduate Loan";
    }
    else if (ys[i]>2012 && l[i]=="Wales") {
      loantype[i]="Plan 2";
    }
    else {
      alert("False Combination");
    }
   }
  }
 return "Loantypes = "+loantype;
}

document.getElementById("loantypefun").innerHTML = loantypef(ys=ys, l=l, pg=pg);

  /******************************************************** CANCELLATION ***********************************/

function cancelf(age_y, age_m, loantype, currentTime, ye, ys, l) {

  for (var i = 0; i < 5; i++){

  if (ys[i]=="Empty"){
    cancelledl[i]="NA";
  }
  else{

  if (loantype[i]=="Plan 2" || loantype[i]=="Postgraduate Loan") {
    cancelled[i]=30-(Math.abs(currentTime-(new Date('04/01/'+(ye[i]))))/ (1000 * 3600 * 24*365));
  }
  else if (loantype[i]=="Plan 1" && (l[i]=="England" || l[i]=="Northern Ireland" || l[i]=="Wales") && ys[i]<=2005) {
  age[i] = new Date(age_m[i]+'/01/'+age_y[i]);
    cancelled[i]=65-(Math.abs(currentTime-age[i])/ (1000 * 3600 * 24*365));
  }
  else if (loantype[i]=="Plan 1" && (l[i]=="England" || l[i]=="Northern Ireland" || l[i]=="Wales") && ys[i]>2005) {
    cancelled[i]=25-(Math.abs(currentTime-(new Date('04/01/'+(ye[i]))))/ (1000 * 3600 * 24*365));
  }
  else if (loantype[i]=="Plan 1" && l[i]=="Scotland" && ys[i]<=2006) {
  age[i] = new Date(age_m[i]+'/01/'+age_y[i]);
    cancelled[i]=65-(Math.abs(currentTime-age[i])/ (1000 * 3600 * 24*365));
  }
  else if (loantype[i]=="Plan 1" && l[i]=="Scotland" && ys[i]>2006) {
    cancelled[i]=25-(Math.abs(currentTime-(new Date('04/01/'+(ye[i]))))/ (1000 * 3600 * 24*365));
  }

  cancelledy[i]=Math.floor(cancelled[i]);
  cancelledm[i]=Math.floor((cancelled[i]-cancelledy[i])*12);
  cancelledl[i]=Math.ceil(cancelled[i]*365);
  }
 }
 return "Days until cancellation = "+cancelledl;
}

document.getElementById("cancelfun").innerHTML = cancelf(age_y=age_y, age_m=age_m, loantype=loantype, currentTime=currentTime, ye=ye, ys=ys, l=l);

    /************************************************** OVERSEAS ***************************************/

function overseasf(loantype, c, ge, ar, curr_ar, curr_bulk, bulk) {

   /* Plan 1 */
      for (var i = 0; i < obj.Sheet1.length; i++){
        if (obj.Sheet1[i].Country == c){
          curr=obj.Sheet1[i].Currency;
          exch=obj.Sheet1[i].Exchange_Rate;
          leth[0]=obj.Sheet1[i].Earnings_threshold;
        }
      }
   /* Plan 2 */
      for (var i = 0; i < obj2.Sheet2.length; i++){
        if (obj2.Sheet2[i].Country == c){
          leth[1]=obj2.Sheet2[i].Lower_income_threshold;
          uet=obj2.Sheet2[i].Upper_income_threshold;
        }
      }
   /* PG Loan */
      for (var i = 0; i < obj2.Sheet2.length; i++){
        if (obj2.Sheet2[i].Country == c){
          leth[2]=obj2.Sheet2[i].Lower_income_threshold;
        }
      }
   /* Voluntary repayments */
      for (var i = 0; i < obj.Sheet1.length; i++){
        if (obj.Sheet1[i].Currency == curr_ar){
          exch_ar=obj.Sheet1[i].Exchange_Rate;
        }
        if (obj.Sheet1[i].Currency == curr_bulk){
          exch_bulk=obj.Sheet1[i].Exchange_Rate;
        }
      }

    arf = Number(ar*exch_ar);
    gef = Number(ge*exch);
    bulkf = Number(bulk*exch_bulk);

 return "Currency Adjusted V. Repayment ="+arf+". Currency Adjusted Earnings = "+gef+". Currency Adjusted Bulk repayment = "+bulkf+". Lower earning thresholds = "+leth+". Plan 2 Upper Earning Threshold = "+uet;
}

document.getElementById("overseasfun").innerHTML = overseasf(loantype=loantype, c=c, ge=ge, ar=ar, curr_ar=curr_ar, curr_bulk=curr_bulk, bulk=bulk);

    /*********************************************** MANDATORY MONTHLY REPAYMENT ****************************/
 

  function mmrf(loantype, gef, tdn, leth, rp) {


	if (loantype[0]=="Plan 1" && (loantype[1]=="Plan 1" || loantype[1]=="NA") && (loantype[2]=="Plan 1" || loantype[2]=="NA") && (loantype[3]=="Plan 1" || loantype[3]=="NA") && (loantype[4]=="Plan 1" || loantype[4]=="NA") && ((gef*tdn)>leth[0])) {
	    mmr_init=((gef*tdn-leth[0])*rp[0])/12;
	}
	else if (loantype[0]=="Plan 2" && (loantype[1]=="Plan 2" || loantype[1]=="NA") && (loantype[2]=="Plan 2" || loantype[2]=="NA") && (loantype[3]=="Plan 2" || loantype[3]=="NA") && (loantype[4]=="Plan 2" || loantype[4]=="NA") && ((gef*tdn)>leth[1])) {
	    mmr_init=((gef*tdn-leth[1])*rp[1])/12;
	}
	else if (loantype[0]=="Postgraduate Loan" && (loantype[1]=="Postgraduate Loan" || loantype[1]=="NA") && (loantype[2]=="Postgraduate Loan" || loantype[2]=="NA") && (loantype[3]=="Postgraduate Loan" || loantype[3]=="NA") && (loantype[4]=="Postgraduate Loan" || loantype[4]=="NA") && ((gef*tdn)>leth[2])) {
	    mmr_init=((gef*tdn-leth[2])*rp[2])/12;
	}
	else if (loantype[0]!="Postgraduate Loan" && (loantype[1]!="Postgraduate Loan") && (loantype[2]!="Postgraduate Loan") && (loantype[3]!="Postgraduate Loan") && (loantype[4]!="Postgraduate Loan") && ((gef*tdn)>leth[0])) {
	   if (gef<=leth[1]){	    
	      mmr_init=((gef*tdn-leth[0])*rp[0])/12;
           }
           else {
	      mmr_init=((leth[1]-leth[0])*rp[0])/12+((gef*tdn-leth[1])*rp[1])/12;
	   }
	}
	else if (loantype[0]!="Plan 2" && (loantype[1]!="Plan 2") && (loantype[2]!="Plan 2") && (loantype[3]!="Plan 2") && (loantype[4]!="Plan 2") && ((gef*tdn)>leth[0])) {
	   if (gef<=leth[1]){	    
	      mmr_init=((gef*tdn-leth[0])*rp[0])/12;
           }
           else {
	      mmr_init=((gef*tdn-leth[0])*rp[0])/12+((gef*tdn-leth[2])*rp[2])/12;
	   }
	}
	else if (loantype[0]!="Plan 1" && (loantype[1]!="Plan 1") && (loantype[2]!="Plan 1") && (loantype[3]!="Plan 1") && (loantype[4]!="Plan 1") && ((gef*tdn)>leth[0])) {
	      mmr_init=((gef*tdn-leth[1])*rp[1])/12+((gef*tdn-leth[2])*rp[2])/12;
	}
	else if ((gef*tdn)>leth[0]) {
	   if (gef<=leth[1]){    
	      mmr_init=((gef*tdn-leth[0])*rp[0])/12;
           }
           else {
	      mmr_init=((leth[1]-leth[0])*rp[0])/12+((gef*tdn-leth[1])*rp[1])/12+((gef*tdn-leth[2])*rp[2])/12;
	   }
	}
    return "Monthly Repayments = "+mmr_init;
}

document.getElementById("mmrfun").innerHTML = mmrf(loantype=loantype, gef=gef, tdn=tdn, leth=leth, rp=rp);

    /*********************************************** REALTIME LOAN ****************************/
 
/*
function realtimef(loantype, gef, arf, bulkf, dl, leth, uet, tdn, tdn_ar, tp, paye, ip1, ip2, ipl, rpi) {

    for (i = 0; i < 5; i++){

    if (paye=="No") {
      rlt=(dl[1]+dl[2]+dl[3]+dl[4]+dl[5]);
      rl=dl;
    }

    else if (paye=="Yes") {
    if (tp<=(5/12)) {
      if (loantype[0]=="Plan 1" && (loantype[1]=="Plan 1" || loantype[1]=="NA") && (loantype[2]=="Plan 1" || loantype[2]=="NA") && (loantype[3]=="Plan 1" || loantype[3]=="NA") && (loantype[4]=="Plan 1" || loantype[4]=="NA")) {
        if ((gef*tdn)<=leth[0]) {
          rlt=((dl[0]+dl[1]+dl[2]+dl[3]+dl[4])*(1+(tp*ip1[0]))-(arf*tp*tdn_ar)-bulkf);
        }
        else if ((gef*tdn)>leth[0]) {
          rlt=((dl[0]+dl[1]+dl[2]+dl[3]+dl[4])*(1+(tp*ip1[0]))-(arf*tp*tdn_ar)-((gef*tdn-leth[0])*tp*rp_p1)-bulkf);
        }
      }
      else if (loantype[1]=="Plan 2" && (loantype[2]=="Plan 2" || loantype[2]=="NA") && (loantype[3]=="Plan 2" || loantype[3]=="NA") && (loantype[4]=="Plan 2" || loantype[4]=="NA") && (loantype[5]=="Plan 2" || loantype[5]=="NA")) {
        if ((gef*tdn)<=leth[1]) {
          rl[i]=(dl[0]+dl[1]+dl[2]+dl[3]+dl[4])*(1+(tp*rpi[1]))-(arf*tp*tdn_ar)-(bulkf);
        }
        else if ((gef*tdn)>leth[1] && (gef*tdn)<=uet[1]) {
	  ifrac=((gef*tdn)-leth[i])/(uet[i]-leth[i]);
          rl[i]=((dl[0]+dl[1]+dl[2]+dl[3]+dl[4])*(1+(tp*((ip2*ifrac[i])+rpi[1])))-(arf*tp*tdn_ar)-((gef*tdn-leth[i])*tp*rp_p2))-(bulkf);
        }
        else if ((gef*tdn)>uet[1]) {
          rl[i]=((dl[0]+dl[1]+dl[2]+dl[3]+dl[4])*(1+(tp*(ip2+rpi[1])))-(arf*tp*tdn_ar)-((gef*tdn-leth[i])*tp*rp_p2))-(bulkf);
        }
      }
      else if (loantype[1]=="Postgraduate Loan" && (loantype[2]=="Postgraduate Loan" || loantype[2]=="NA") && (loantype[3]=="Postgraduate Loan" || loantype[3]=="NA") && (loantype[4]=="Postgraduate Loan" || loantype[4]=="NA") && (loantype[5]=="Postgraduate Loan" || loantype[5]=="NA")) {
        if ((gef*tdn)<=leth[1]) {
          rl[i]=dl[i]*(1+(tp*(ipl+rpi[1])))-(arf*tp*tdn_ar)-(bulkf);
        }
        else if ((gef*tdn)>leth[i]) {
          rl[i]=(dl[i]*(1+(tp*(ipl+rpi[1])))-(arf*tp*tdn_ar)-((gef*tdn-leth[i])*tp*rp_pl))-(bulkf);
        }
      }
    }
  }

    else {
    if (paye=="No") {
      rl[i]=Number(dl);
    }
    else if (paye=="Yes") {
      if (loantype[i]=="Plan 1") {
        if ((gef*tdn)<=leth[i]) {
          rl[i]=Number(dl[i] + (dl[i]*((5/12)*ip1[1]))+(dl[i]*((tp-(5/12))*ip1[2]))-(arf*tp*tdn_ar)-(bulkf));
        }
        else if ((gef*tdn)>leth[i]) {
          rl[i]=Number(dl[i] + (dl[i]*((5/12)*ip1[1]))+(dl[i]*((tp-(5/12))*ip1[2]))-(arf*tp*tdn_ar)-((gef*tdn-leth[i])*tp*rp_p1)-(bulkf));
        }
      }
      else if (loantype[i]=="Plan 2") {
        if ((gef*tdn)<=leth[i]) {
          rl[i]=Number(dl[i] + (dl[i]*((5/12)*rpi[1]))+(dl[i]*((tp-(5/12))*rpi[2]))-(arf*tp*tdn_ar)-(bulkf));
        }
        else if ((gef*tdn)>leth[i] && (gef*tdn)<=uet[i]) {
	  ifrac=((gef*tdn)-leth[i])/(uet[i]-leth[i]);
          rl[i]=Number(dl[i] + (dl[i]*((5/12)*((ip2*ifrac)+rpi[1])))+(dl[i]*((tp-(5/12))*((ip2*ifrac)+rpi[1])))-(arf*tp*tdn_ar)-((gef*tdn-leth[i])*tp*rp_p2)-(bulkf));
        }
        else if ((gef*tdn)>uet[i]) {
          rl[i]=Number(dl[i] + (dl[i]*((5/12)*(ip2+rpi[1])))+(dl[i]*((tp-(5/12))*(ip2+rpi[2])))-(arf*tp*tdn_ar)-((gef*tdn-leth[i])*tp*rp_p2)-(bulkf));
        }
      }
      else if (loantype[i]=="Postgraduate Loan") {
        if ((gef*tdn)<=leth[i]) {
          rl[i]=Number(dl[i] + (dl[i]*((5/12)*(ipl+rpi[1])))+(dl[i]*((tp-(5/12))*(ipl+rpi[2])))-(arf*tp*tdn_ar)-(bulkf));
        }
        else if ((gef*tdn)>leth[i]) {
          rl[i]=Number(dl[i] + (dl[i]*((5/12)*(ipl+rpi[1])))+(dl[i]*((tp-(5/12))*(ipl+rpi[2])))-(arf*tp*tdn_ar)-((gef*tdn-leth[i])*tp*rp_pl)-(bulkf));
        }
      }
    }
  }
}
return rl;
}

document.getElementById("realtimefun").innerHTML = realtimef(loantype=loantype, gef=gef, arf=arf, bulkf=bulkf, dl=dl, leth=leth, uet=uet, tdn=tdn, tdn_ar=tdn_ar, tp=tp, paye=paye, ip1=ip1, ip2=ip2, ipl=ipl, rpi=rpi);

  /******************************************************** ADDING COMMAS ***********************************/

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  /******************************************************** CALCULATE FUNCTION ***********************************/
/*
function calculate(dl_1, dl_2, dl_3, dl_4, dl_5, paye, ge, td, c, ar, td_ar, curr_ar, bulk, curr_bulk){

    /******************************** TIME UNTIL LOAN PAID OFF OR CANCELLED ****************************/
/*
    var cl=rl;
    var j=0;
    var ir;
    if (loantype=="Plan 1") {
      if ((gef*tdn)<=let_p1) {
        while (cl>0 && j<(cancelledl)) {
          if ((j % 365)==0) {
            ir= cl*ip1_2;
          }
          else{
            ir=ir;
          }
          cl=(cl+(ir/365))-((arf/365)*tdn_ar);
          j=j+1;
        }
      }
      else if ((gef*tdn)>let_p1) {
        while (cl>0 && j<(cancelledl)) {
          if ((j % 365)==0) {
            ir= cl*ip1_2;
          }
          else{
            ir=ir;
          }
          cl=(cl+(ir/365))-((arf/365)*tdn_ar)-(((gef*tdn-let_p1)*rp_p1)/365);
          j=j+1;
        }
      }
    }
    else if (loantype=="Plan 2") {
      if ((gef*tdn)<=let_p2) {
        while (cl>0 && j<(cancelledl)) {
          if ((j % 365)==0) {
            ir= cl*rpi_2;
          }
          else{
            ir=ir;
          }
          cl=(cl+(ir/365))-((arf/365)*tdn_ar);
          j=j+1;
        }
      }
      else if ((gef*tdn)>let_p2 && (gef*tdn)<=uet) {
        while (cl>0 && j<(cancelledl)) {
          if ((j % 365)==0) {
            ir= cl*((ip2*ifrac)+rpi_2);
          }
          else{
            ir=ir;
          }
          cl=(cl+(ir/365))-((arf/365)*tdn_ar)-(((gef*tdn-let_p2)*rp_p2)/365);
          j=j+1;
        }
      }
      else if ((gef*tdn)>uet) {
        while (cl>0 && j<(cancelledl)) {
          if ((j % 365)==0) {
            ir= cl*(ip2+rpi_2);
          }
          else{
            ir=ir;
          }
          cl=(cl+(ir/365))-((arf/365)*tdn_ar)-(((gef*tdn-let_p2)*rp_p2)/365);
          j=j+1;
        }
      }
    }
      else if (loantype=="Postgraduate Loan") {
        if ((gef*tdn)<=let_pl) {
          while (cl>0 && j<(cancelledl)) {
            if ((j % 365)==0) {
              ir= cl*(ipl+rpi_2);
            }
            else{
              ir=ir;
            }
            cl=(cl+(ir/365))-((arf/365)*tdn_ar);
            j=j+1;
          }
        }
        else if ((gef*tdn)>let_pl) {
          while (cl>0 && j<(cancelledl)) {
            if ((j % 365)==0) {
              ir= cl*(ipl+rpi_2);
            }
            else{
              ir=ir;
            }
            cl=(cl+(ir/365))-((arf/365)*tdn_ar)-(((gef*tdn-let_pl)*rp_pl)/365);
            j=j+1;
          }
        }
      }
      var jy=Math.floor(j/365);
      var jm=Math.floor(((j/365)-jy)*12);

      /**************************** TIME UNTIL CANCELLATION NO ADDITIONAL REPAYMENTS ******************************/
/*
      cl1=rl;
      j1=0;
      ir1;
      if (loantype=="Plan 1") {
        if ((gef*tdn)<=let_p1) {
          while (cl1>0 && j1<(cancelledl)) {
            if ((j1 % 365)==0) {
              ir1= cl1*ip1_2;
            }
            else{
              ir1=ir1;
            }
            cl1=(cl1+(ir1/365));
            j1=j1+1;
          }
        }
        else if ((gef*tdn)>let_p1) {
          while (cl1>0 && j1<(cancelledl)) {
            if ((j1 % 365)==0) {
              ir1= cl1*ip1_2;
            }
            else{
              ir1=ir1;
            }
            cl1=(cl1+(ir1/365))-(((gef*tdn-let_p1)*rp_p1)/365);
            j1=j1+1;
          }
        }
      }
      else if (loantype=="Plan 2") {
        if ((gef*tdn)<=let_p2) {
          while (cl1>0 && j1<(cancelledl)) {
            if ((j1 % 365)==0) {
              ir1= cl1*rpi_2;
            }
            else{
              ir1=ir1;
            }
            cl1=(cl1+(ir1/365));
            j1=j1+1;
          }
        }
        else if ((gef*tdn)>let_p2 && (gef*tdn)<=uet) {
          while (cl1>0 && j1<(cancelledl)) {
            if ((j1 % 365)==0) {
              ir1= cl1*((ip2*ifrac)+rpi_2);
            }
            else{
              ir1=ir1;
            }
            cl1=(cl1+(ir1/365))-(((gef*tdn-let_p2)*rp_p2)/365);
            j1=j1+1;
          }
        }
        else if ((gef*tdn)>uet) {
          while (cl1>0 && j1<(cancelledl)) {
            if ((j1 % 365)==0) {
              ir1= cl1*(ip2+rpi_2);
            }
            else{
              ir1=ir1;
            }
            cl1=(cl1+(ir1/365))-(((gef*tdn-let_p2)*rp_p2)/365);
            j1=j1+1;
          }
        }
      }
        else if (loantype=="Postgraduate Loan") {
          if ((gef*tdn)<=let_pl) {
            while (cl1>0 && j1<(cancelledl)) {
              if ((j1 % 365)==0) {
                ir1= cl1*(ipl+rpi_2);
              }
              else{
                ir1=ir1;
              }
              cl1=(cl1+(ir1/12));
              j1=j1+1;
            }
          }
          else if ((gef*tdn)>let_pl) {
            while (cl1>0 && j1<(cancelledl)) {
              if ((j1 % 365)==0) {
                ir1= cl1*(ipl+rpi_2);
              }
              else{
                ir1=ir1;
              }
              cl1=(cl1+(ir1/365))-(((gef*tdn-let_pl)*rp_pl)/365);
              j1=j1+1;
            }
          }
        }
        var jy1=Math.floor(j1/365);
        var jm1=Math.floor(((j1/365)-jy1)*12);

      /********************************************** EXTRA SAVED **************************************/
/*
      if (loantype=="Plan 1") {
        if ((gef*tdn)<=let_p1) {
            es= -(j/365)*(arf*tdn_ar);
        }
        else if ((gef*tdn)>let_p1) {
            es=(j1/365)*((gef*tdn-let_p1)*rp_p1)-(j/365)*((arf*tdn_ar)+((gef*tdn-let_p1)*rp_p1));
        }
      }
      else if (loantype=="Plan 2") {
        if ((gef*tdn)<=let_p2) {
            es= -(j/365)*(arf*tdn_ar);
        }
        else if ((gef*tdn)>let_p2) {
            es=(j1/365)*((gef*tdn-let_p2)*rp_p2)-(j/365)*((arf*tdn_ar)+((gef*tdn-let_p2)*rp_p2));
        }
      }
      else if (loantype=="Postgraduate Loan") {
        if ((gef*tdn)<=let_pl) {
            es= -(j/365)*(arf*tdn_ar);
        }
        else if ((gef*tdn)>let_pl) {
            es=(j1/365)*((gef*tdn-let_pl)*rp_pl)-(j/365)*((arf*tdn_ar)+((gef*tdn-let_pl)*rp_pl));
          }
        }

      /********************************************** ADDITIONAL REPAYMENT TOTAL **************************************/
/*
      var loancomp;
      if (j==cancelledl) {
        loancomp="Your loan will be cancelled";
      }
      else {
        loancomp=jy +" years, "+jm +" months";
      }

      var art=(j/365)*(arf*tdn_ar);
      var artm=(art/(j*12/365));
    
      if (j==0){
         artm=0;
      }

      function findr() {
        var n= jy*12+jm;
        var pmt = art/n;
        var fv = art+es;
        var y =1;
        var shif=1;
        var int=0.000001;
	if (pmt==0) {
	shif=0;
	}
	else {
        while (y>=0 && shif>0) {
        y = (Math.pow((1+shif),n))-((fv/pmt)*shif)-1;
        shif = shif-int;
        }
        }
      return shif;
    }
    shif=(Math.pow((1+findr()),12)-1)*100;
      shifo = parseFloat(Math.round(shif*100)/100).toFixed(2);
      rlo = parseFloat(Math.round(rl*100)/100).toFixed(2);
      eso=parseFloat(Math.round(es*100)/100).toFixed(2);
      arto=parseFloat(Math.round(art*100)/100).toFixed(2);
      artmo=parseFloat(Math.round(artm*100)/100).toFixed(2); 
     function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      rlo=numberWithCommas(rlo);
      eso=numberWithCommas(eso);
      arto=numberWithCommas(arto);
      artmo=numberWithCommas(artmo);

      if (rlo<0) {
        rlo=0;
      }

  document.getElementById('rl').innerHTML="£"+rlo;
  document.getElementById('loantype').innerHTML=loantype;
  document.getElementById('tcanc').innerHTML=loancomp;
  document.getElementById('cancelled').innerHTML=cancelledy +" years, "+cancelledm +" months";
  document.getElementById('es').innerHTML="£"+eso;
  document.getElementById('art').innerHTML="£"+arto;
  document.getElementById('artm').innerHTML="£"+artmo;
  document.getElementById('inteq').innerHTML=shifo+"%";
}

/************************************************************************************/
/********************************* RECALCULATE FUNCTION *****************************/
/************************************************************************************/
/*
var arc;
var td_arc;
var curr_arc;
var tdn_arc;
var exch_arc;
var arcf;
var es2;
var es02;
var arto2;
var art2;
var exch_bulk_ar;
var bulk_ar;
var curr_bulk_ar;

function recalculate(){

  arc = document.outform.arc.value;
  td_arc = document.outform.td_arc.value;
  curr_arc = document.outform.curr_arc.value;
  bulk_ar = document.outform.bulk_ar.value;
  curr_bulk_ar = document.outform.curr_bulk_ar.value;

  var ifrac=+((gef*tdn)-let_p2)/(uet-let_p2);

  /******************************************* Make time adjustments ********************************/
/*
  if (td_arc=="per year") {
    tdn_arc=1;
  }
  else if (td_arc=="per month") {
    tdn_arc=12;
  }
  else if (td_arc=="per week") {
    tdn_arc=52;
  }

  /******************************************* EXCHANGE RATE ********************************/
/*
  for (var i = 0; i < obj.Sheet1.length; i++){
    if (obj.Sheet1[i].Currency == curr_arc){
      exch_arc=obj.Sheet1[i].Exchange_Rate;
    }
    if (obj.Sheet1[i].Currency == curr_bulk_ar){
      exch_bulk_ar=obj.Sheet1[i].Exchange_Rate;
    }
  }

  var arcf = arc*exch_arc;
  /******************************** TIME UNTIL LOAN PAID OFF OR CANCELLED ****************************/
/*
  var cl2=rl-(bulk_ar*exch_bulk_ar);
  var j2=0;
  var ir2;
  if (loantype=="Plan 1") {
    if ((gef*tdn)<=let_p1) {
      while (cl2>0 && j2<(cancelledl)) {
        if ((j2 % 365)==0) {
          ir2= cl2*ip1_2;
        }
        else{
          ir2=ir2;
        }
        cl2=(cl2+(ir2/365))-((arcf/365)*tdn_arc);
        j2=j2+1;
      }
    }
    else if ((gef*tdn)>let_p1) {
      while (cl2>0 && j2<(cancelledl)) {
        if ((j2 % 365)==0) {
          ir2= cl2*ip1_2;
        }
        else{
          ir2=ir2;
        }
        cl2=(cl2+(ir2/365))-((arcf/365)*tdn_arc)-(((gef*tdn-let_p1)*rp_p1)/365);
        j2=j2+1;
      }
    }
  }
  else if (loantype=="Plan 2") {
    if ((gef*tdn)<=let_p2) {
      while (cl2>0 && j2<(cancelledl)) {
        if ((j2 % 365)==0) {
          ir2= cl2*rpi_2;
        }
        else{
          ir2=ir2;
        }
        cl2=(cl2+(ir2/365))-((arcf/365)*tdn_arc);
        j2=j2+1;
      }
    }
    else if ((gef*tdn)>let_p2 && (gef*tdn)<=uet) {
      while (cl2>0 && j2<(cancelledl)) {
        if ((j2 % 365)==0) {
          ir2= cl2*((ip2*ifrac)+rpi_2);
        }
        else{
          ir2=ir2;
        }
        cl2=(cl2+(ir2/365))-((arcf/365)*tdn_arc)-(((gef*tdn-let_p2)*rp_p2)/365);
        j2=j2+1;
      }
    }
    else if ((gef*tdn)>uet) {
      while (cl2>0 && j2<(cancelledl)) {
        if ((j2 % 365)==0) {
          ir2= cl2*(ip2+rpi_2);
        }
        else{
          ir2=ir2;
        }
        cl2=(cl2+(ir2/365))-((arcf/365)*tdn_arc)-(((gef*tdn-let_p2)*rp_p2)/365);
        j2=j2+1;
      }
    }
  }
    else if (loantype=="Postgraduate Loan") {
      if ((gef*tdn)<=let_pl) {
        while (cl2>0 && j2<(cancelledl)) {
          if ((j2 % 365)==0) {
            ir2= cl2*(ipl+rpi_2);
          }
          else{
            ir2=ir2;
          }
          cl2=(cl2+(ir2/365))-((arcf/365)*tdn_arc);
          j2=j2+1;
        }
      }
      else if ((gef*tdn)>let_pl) {
        while (cl2>0 && j2<(cancelledl)) {
          if ((j2 % 365)==0) {
            ir2= cl2*(ipl+rpi_2);
          }
          else{
            ir2=ir2;
          }
          cl2=(cl2+(ir2/365))-((arcf/365)*tdn_arc)-(((gef*tdn-let_pl)*rp_pl)/365);
          j2=j2+1;
        }
      }
    }
    var j2y=Math.floor(j2/365);
    var j2m=Math.floor(((j2/365)-j2y)*12);


    /********************************************** EXTRA SAVED **************************************/
/*
    if (loantype=="Plan 1") {
      if ((gef*tdn)<=let_p1) {
          es2= -(j2/365)*(arcf*tdn_arc)-(bulk_ar*exch_bulk_ar);
      }
      else if ((gef*tdn)>let_p1) {
          es2=(j1/365)*((gef*tdn-let_p1)*rp_p1)-(j2/365)*((arcf*tdn_arc)+((gef*tdn-let_p1)*rp_p1))-(bulk_ar*exch_bulk_ar);
      }
    }
    else if (loantype=="Plan 2") {
      if ((gef*tdn)<=let_p2) {
          es2= -(j2/365)*(arcf*tdn_arc)-(bulk_ar*exch_bulk_ar);
      }
      else if ((gef*tdn)>let_p2) {
          es2=(j1/365)*((gef*tdn-let_p2)*rp_p2)-(j2/365)*((arcf*tdn_arc)+((gef*tdn-let_p2)*rp_p2))-(bulk_ar*exch_bulk_ar);
      }
    }
    else if (loantype=="Postgraduate Loan") {
      if ((gef*tdn)<=let_pl) {
          es2= -(j2/365)*(arcf*tdn_arc)-(bulk_ar*exch_bulk_ar);
      }
      else if ((gef*tdn)>let_pl) {
          es2=(j1/365)*((gef*tdn-let_pl)*rp_pl)-(j2/365)*((arcf*tdn_arc)+((gef*tdn-let_pl)*rp_pl))-(bulk_ar*exch_bulk_ar);
        }
      }

    /********************************************** ADDITIONAL REPAYMENT TOTAL **************************************/
/*
    var art2=(j2/365)*(arcf*tdn_arc)+(bulk_ar*exch_bulk_ar);
    var artm2=(art2/(j2*12/365));
    
    if (j2==0){
       artm2=0;
    }

    function findr() {
        var n2= j2y*12+j2m;
        var pmt2 = art2/n2;
        var fv2 = art2+es2;
        var y2 =1;
        var shif2=1;
        var int2=0.000001;
	if (pmt2==0){
	shif2=0;
	}
	else {
        while (y2>=0 && shif2>0) {
        y2 = (Math.pow((1+shif2),n2))-((fv2/pmt2)*shif2)-1;
        shif2 = shif2-int2;
        }
	}
      return shif2;
    }
    shif2=(Math.pow((1+findr()),12)-1)*100;
      

    var loancomp2;
    if (j2==cancelledl) {
      loancomp2="Your loan will be cancelled";
    }
    else {
      loancomp2=j2y +" years, "+j2m +" months";
    }

    shifo2 = parseFloat(Math.round(shif2*100)/100).toFixed(2);
    eso2=parseFloat(Math.round(es2*100)/100).toFixed(2);
    arto2=parseFloat(Math.round(art2*100)/100).toFixed(2);
    artmo2=parseFloat(Math.round(artm2*100)/100).toFixed(2);
    eso2=numberWithCommas(eso2);
    arto2=numberWithCommas(arto2);
    artmo2=numberWithCommas(artmo2);
document.getElementById('tcanc').innerHTML=loancomp2;
document.getElementById('es').innerHTML="£"+eso2;
document.getElementById('art').innerHTML="£"+arto2;
document.getElementById('artm').innerHTML="£"+artmo2;
document.getElementById('inteq').innerHTML=shifo2+"%";
}

/************************************************************************************/
/*********************************** CURREN FUNCTION ********************************/
/************************************************************************************/
/*
function curren(){
  var c;
  var plan1c = '{"Sheet1":[{"Country":"Afghanistan","Currency":"Afghanis","Exchange_Rate":0.010752,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Albania","Currency":"Leke","Exchange_Rate":0.00482,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Algeria","Currency":"Algerian Dinar","Exchange_Rate":0.006578,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"American Samoa","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Andorra","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Angola","Currency":"Kwanza","Exchange_Rate":0.005535,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Anguilla","Currency":"East Caribbean Dollar","Exchange_Rate":0.240129,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Antarctica","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Antigua and Barbuda","Currency":"East Caribbean Dollar","Exchange_Rate":0.240129,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Argentina","Currency":"Argentine Peso","Exchange_Rate":0.071396,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Armenia","Currency":"Dram","Exchange_Rate":0.001358,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Aruba","Currency":"Aruban Guilder","Exchange_Rate":0.36221,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Australia","Currency":"Australian Dollar","Exchange_Rate":0.494628,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Austria","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Azerbaijan","Currency":"Azerbaijanian Manat","Exchange_Rate":0.661423,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Bahamas","Currency":"Bahamian Dollar","Exchange_Rate":0.651585,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Bahrain","Currency":"Bahrain Dinar","Exchange_Rate":1.719265,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Bangladesh","Currency":"Taka","Exchange_Rate":0.007731,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Barbados","Currency":"Barbados Dollar","Exchange_Rate":0.324175,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Belarus","Currency":"Belarusian Ruble","Exchange_Rate":0.000043,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Belgium","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Belize","Currency":"Belizean Dollar","Exchange_Rate":0.324265,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Benin","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001112,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Bermuda","Currency":"Bermudian Dollar","Exchange_Rate":0.651585,"Earnings_threshold":24490,"Minimum_monthly_repayment":344.4},{"Country":"Bhutan","Currency":"Bhutanese Ngultrum","Exchange_Rate":0.010196,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},'+
            '{"Country":"Bolivia","Currency":"Boliviano","Exchange_Rate":0.090931,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Bonaire, Saint Eustatius and Saba","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Bosnia and Herzegovina","Currency":"Convertible Marka","Exchange_Rate":0.372711,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Botswana","Currency":"Pula","Exchange_Rate":0.065092,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Bouvet Island","Currency":"Norwegian Krone","Exchange_Rate":0.081383,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Brazil","Currency":"Brazilian Real","Exchange_Rate":0.203164,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"British Indian Ocean Territory","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Brunei","Currency":"Brunei Dollar","Exchange_Rate":0.476527,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Bulgaria","Currency":"Bulgarian Lev","Exchange_Rate":0.372705,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Burkina Faso","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001112,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Burundi","Currency":"Burundi Franc","Exchange_Rate":0.000413,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Cambodia","Currency":"Riel","Exchange_Rate":0.00016,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Cameroon","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001112,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Canada","Currency":"Canadian Dollar","Exchange_Rate":0.514617,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Cape Verde","Currency":"Cape Verde Escudo","Exchange_Rate":0.006566,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Cayman Islands","Currency":"Cayman Islands Dollar","Exchange_Rate":0.790672,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Central African Republic","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001112,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Chad","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001112,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Channel Islands","Currency":"British Pound","Exchange_Rate":1,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Chile","Currency":"Chilean Peso","Exchange_Rate":0.001011,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"China","Currency":"Yuan Renminbi","Exchange_Rate":0.103366,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Christmas Island","Currency":"Australian Dollar","Exchange_Rate":0.494628,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Cocos (Keeling) Islands","Currency":"Australian Dollar","Exchange_Rate":0.494628,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Colombia","Currency":"Colombian Peso","Exchange_Rate":0.000246,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},'+
            '{"Country":"Comoros","Currency":"Comorian Franc","Exchange_Rate":0.001483,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Congo","Currency":"Congolese Franc","Exchange_Rate":0.000703,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Congo, Democratic Republic of","Currency":"Congolese Franc","Exchange_Rate":0.000703,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Cook Islands","Currency":"New Zealand Dollar","Exchange_Rate":0.459208,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Costa Rica","Currency":"Costa Rican Colon","Exchange_Rate":0.001219,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Cote dIvoire","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001112,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Croatia","Currency":"Kuna","Exchange_Rate":0.095764,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Cuba","Currency":"Cuban Peso","Exchange_Rate":0.64835,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Curacao","Currency":"Antillean Guilder","Exchange_Rate":0.364014,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Cyprus","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Czech Republic","Currency":"Czech Koruna","Exchange_Rate":0.026689,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Denmark","Currency":"Danish Krone","Exchange_Rate":0.097372,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Djibouti","Currency":"Djiboutian Franc","Exchange_Rate":0.003646,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Dominica","Currency":"East Caribbean Dollar","Exchange_Rate":0.240129,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Dominican Republic","Currency":"Dominican Peso","Exchange_Rate":0.01445,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Ecuador","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Egypt","Currency":"Egyptian Pound","Exchange_Rate":0.084767,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"El Salvador","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Equatorial Guinea","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001112,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Eritrea","Currency":"Nafka","Exchange_Rate":0.043182,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Estonia","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Ethiopia","Currency":"Ethiopian Birr","Exchange_Rate":0.031444,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Faeroe Islands","Currency":"Danish Krone","Exchange_Rate":0.097372,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Falkland Islands","Currency":"Falkland Pound","Exchange_Rate":1,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},'+
            '{"Country":"Federated States of Micronesia","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Fiji","Currency":"Fiji Dollar","Exchange_Rate":0.313661,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Finland","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"France","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"French Guiana","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"French Polynesia","Currency":"CFP Franc","Exchange_Rate":0.006111,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"French Southern Territories","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Gabon","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001112,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Gambia","Currency":"Dalasi","Exchange_Rate":0.015713,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Georgia","Currency":"Lari","Exchange_Rate":0.292235,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Germany","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Ghana","Currency":"Ghanaian Cedi","Exchange_Rate":0.17564,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Gibraltar","Currency":"British Pound","Exchange_Rate":1,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Greece","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Greenland","Currency":"Danish Krone","Exchange_Rate":0.097372,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Grenada","Currency":"East Caribbean Dollar","Exchange_Rate":0.240129,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Guadeloupe","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Guam","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Guatemala","Currency":"Quetzal","Exchange_Rate":0.084803,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Guinea","Currency":"Guinean Franc","Exchange_Rate":0.000089,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Guinea-Bissau","Currency":"CFA Franc (BCEAO)","Exchange_Rate":0.001112,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Guyana","Currency":"Guyanese Dollar","Exchange_Rate":0.003194,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Haiti","Currency":"Gourde","Exchange_Rate":0.013058,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Heard and McDonald Islands","Currency":"Australian Dollar","Exchange_Rate":0.494628,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Holy See (Vatican City State)","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},'+
            '{"Country":"Honduras","Currency":"Lempira","Exchange_Rate":0.029941,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Hong Kong","Currency":"Hong Kong Dollar","Exchange_Rate":0.084062,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Hungary","Currency":"Forint","Exchange_Rate":0.002353,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Iceland","Currency":"Icelandic Krona","Exchange_Rate":0.004947,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"India","Currency":"Indian Rupee","Exchange_Rate":0.010191,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Indonesia","Currency":"Indonesian Rupiah","Exchange_Rate":0.000049,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Iran","Currency":"Iranian Rial","Exchange_Rate":0.000025,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Iraq","Currency":"Iraqi Dinar","Exchange_Rate":0.000555,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Ireland","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Isle of Man","Currency":"British Pound","Exchange_Rate":1,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Israel","Currency":"New Israeli Shekel","Exchange_Rate":0.167121,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Italy","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Jamaica","Currency":"Jamaican Dollar","Exchange_Rate":0.005566,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Japan","Currency":"Yen","Exchange_Rate":0.0054,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Jordan","Currency":"Jordanian Dinar","Exchange_Rate":0.914643,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Kazakhstan","Currency":"Tenge","Exchange_Rate":0.003115,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Kenya","Currency":"Kenya Schilling","Exchange_Rate":0.006665,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Kiribati","Currency":"Australian Dollar","Exchange_Rate":0.494628,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Korea, Democratic Peoples Republic of","Currency":"Won Korea Dem. Rep","Exchange_Rate":0.466523,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Korea, Republic of","Currency":"Won Korea Rep","Exchange_Rate":0.000567,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Kuwait","Currency":"Kuwaiti Dinar","Exchange_Rate":2.161992,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Kyrgyztan Republic","Currency":"Kyrgyzstan Som","Exchange_Rate":0.010219,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Lao PDR","Currency":"Kip","Exchange_Rate":0.00008,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Latvia","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Lebanon","Currency":"Lebanese Pound","Exchange_Rate":0.00043,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Lesotho","Currency":"Loti","Exchange_Rate":0.052138,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},'+
            '{"Country":"Liberia","Currency":"Liberian Dollar (US Dollar in use)","Exchange_Rate":0.651585,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Libya","Currency":"Libyan Dinar","Exchange_Rate":0.487847,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Liechtenstein","Currency":"Swiss Franc","Exchange_Rate":0.681786,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Lithuania","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Luxembourg","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Macau","Currency":"Patacas","Exchange_Rate":0.081203,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Macedonia","Currency":"Macedonian Denar","Exchange_Rate":0.011854,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Madagascar","Currency":"Malagasy Ariary","Exchange_Rate":0.000214,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Malawi","Currency":"Malawi Kwacha","Exchange_Rate":0.00134,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Malaysia","Currency":"Ringgit","Exchange_Rate":0.169751,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Maldives","Currency":"Rufiyaa","Exchange_Rate":0.042736,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Mali","Currency":"CFA Franc (BCEAO)","Exchange_Rate":0.001112,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Malta","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Marshall Islands","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Martinique","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Mauritania","Currency":"Ouguiyas","Exchange_Rate":0.002107,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Mauritius","Currency":"Mauritius Rupee","Exchange_Rate":0.01867,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Mayotte","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Mexico","Currency":"Mexican Peso","Exchange_Rate":0.041495,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Moldova","Currency":"Moldovan Leu","Exchange_Rate":0.035301,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Monaco","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Mongolia","Currency":"Tugrik","Exchange_Rate":0.000332,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Montenegro","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Montserrat","Currency":"East Caribbean Dollar","Exchange_Rate":0.240129,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Morocco","Currency":"Moroccan Dirham","Exchange_Rate":0.06724,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},'+
            '{"Country":"Mozambique","Currency":"Metical","Exchange_Rate":0.017232,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Myanmar","Currency":"Kyat","Exchange_Rate":0.000572,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Namibia","Currency":"Namibian Dollar","Exchange_Rate":0.052086,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Nauru","Currency":"Australian Dollar","Exchange_Rate":0.494628,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Nepal","Currency":"Nepalese Rupee","Exchange_Rate":0.006341,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Netherlands","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"New Caledonia","Currency":"CFP Franc","Exchange_Rate":0.006111,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"New Zealand","Currency":"New Zealand Dollar","Exchange_Rate":0.459208,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Nicaragua","Currency":"Gold Cordoba","Exchange_Rate":0.023887,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Niger","Currency":"CFA Franc (BCEAO)","Exchange_Rate":0.001112,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Nigeria","Currency":"Nigerian Naira","Exchange_Rate":0.003291,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Niue","Currency":"New Zealand Dollar","Exchange_Rate":0.459208,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Norfolk Island","Currency":"Australian Dollar","Exchange_Rate":0.494628,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Northern Mariana Islands","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Norway","Currency":"Norwegian Krone","Exchange_Rate":0.081383,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Oman","Currency":"Rial Omani","Exchange_Rate":1.683978,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Pakistan","Currency":"Pakistan Rupee","Exchange_Rate":0.00634,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Palau","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Palestine","Currency":"New Israeli Shekel","Exchange_Rate":0.167121,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Panama","Currency":"Balboas","Exchange_Rate":0.648349,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Papua New Guinea","Currency":"Kina","Exchange_Rate":0.238081,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Paraguay","Currency":"Guarani","Exchange_Rate":0.000127,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Peru","Currency":"New Sol","Exchange_Rate":0.20636,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Philippines","Currency":"Philippine Peso","Exchange_Rate":0.014347,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Pitcairn","Currency":"New Zealand Dollar","Exchange_Rate":0.459208,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},'+
            '{"Country":"Poland","Currency":"Zloty","Exchange_Rate":0.175041,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Portugal","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Puerto Rico","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Qatar","Currency":"Qatar Riyal","Exchange_Rate":0.178067,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Reunion","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Romania","Currency":"Romanian Leu","Exchange_Rate":0.164021,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Russian Federation","Currency":"Russian Ruble","Exchange_Rate":0.010924,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Rwanda","Currency":"Rwanda Franc","Exchange_Rate":0.000911,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Saint Helena","Currency":"Saint Helena Pound","Exchange_Rate":1,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Saint Kitts and Nevis","Currency":"East Caribbean Dollar","Exchange_Rate":0.240129,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Saint Lucia","Currency":"East Caribbean Dollar","Exchange_Rate":0.240129,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Saint Martin (French part)","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Saint Pierre and Miquelon","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Saint Vincent and Grenadines","Currency":"East Caribbean Dollar","Exchange_Rate":0.240129,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Saint-Barthelemy","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Samoa","Currency":"Tala","Exchange_Rate":0.256516,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"San Marino","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Sao Tome and Principe","Currency":"Dobras","Exchange_Rate":0.000034,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Saudi Arabia","Currency":"Saudi Riyal","Exchange_Rate":0.17373,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Senegal","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001112,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Serbia","Currency":"Serbian Dinar","Exchange_Rate":0.006049,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Seychelles","Currency":"Seychelles Rupee","Exchange_Rate":0.048555,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Sierra Leone","Currency":"Leone","Exchange_Rate":0.000151,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Singapore","Currency":"Singapore Dollar","Exchange_Rate":0.475523,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Sint Maarten (Dutch part)","Currency":"Antilles Guilder","Exchange_Rate":0.364014,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},'+
            '{"Country":"Slovakia","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Slovenia","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Solomon Islands","Currency":"Solomon Islands Dollar","Exchange_Rate":0.083001,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Somalia","Currency":"Somali Shilling","Exchange_Rate":0.001243,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"South Africa","Currency":"Rand","Exchange_Rate":0.052086,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"South Georgia and the South Sandwich Islands","Currency":"British Pound","Exchange_Rate":1,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"South Sudan","Currency":"Sudanese Pound","Exchange_Rate":0.10833,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Spain","Currency":"Euro","Exchange_Rate":0.725471,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Sri Lanka","Currency":"Sri Lankan Rupee","Exchange_Rate":0.004802,"Earnings_threshold":3505,"Minimum_monthly_repayment":49.2},{"Country":"Sudan","Currency":"Sudanese Pound","Exchange_Rate":0.10833,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Suriname","Currency":"Surinam Dollar","Exchange_Rate":0.195304,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Svalbard and Jan Mayen Islands","Currency":"Norwegian Krone","Exchange_Rate":0.081383,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Swaziland","Currency":"Lilangeni","Exchange_Rate":0.052103,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Sweden","Currency":"Swedish Krona","Exchange_Rate":0.077393,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Switzerland","Currency":"Swiss Franc","Exchange_Rate":0.681786,"Earnings_threshold":20990,"Minimum_monthly_repayment":295.2},{"Country":"Syria","Currency":"Syrian Pound","Exchange_Rate":0.00399,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Taiwan","Currency":"Taiwan Dollar","Exchange_Rate":0.020564,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Tajikistan","Currency":"Somoni","Exchange_Rate":0.12336,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Thailand","Currency":"Thai Baht","Exchange_Rate":0.01907,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Timor-Leste","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Togo","Currency":"CFA Franc (BEAC)","Exchange_Rate":0.001112,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Tokelau","Currency":"New Zealand Dollar","Exchange_Rate":0.459208,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Tonga","Currency":"Pa anga","Exchange_Rate":0.494628,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Trinidad and Tobago","Currency":"Trinidad & Tobago Dollar","Exchange_Rate":0.101917,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Tunisia","Currency":"Tunisian Dinar","Exchange_Rate":0.334047,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},'+
            '{"Country":"Turkey","Currency":"Turkish New Lira","Exchange_Rate":0.244109,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Turkmenistan","Currency":"Turkmenistan New Manat","Exchange_Rate":0.190629,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Turks and Caicos Islands","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Tuvalu","Currency":"Australian Dollar","Exchange_Rate":0.494628,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Uganda","Currency":"Ugandan New Shilling","Exchange_Rate":0.000206,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Ukraine","Currency":"Hryvnia","Exchange_Rate":0.030654,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"United Arab Emirates","Currency":"U.A.E. Dirham","Exchange_Rate":0.176927,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"United Kingdom","Currency":"British Pound","Exchange_Rate":1,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"United Republic of Tanzania","Currency":"Tanzanian Shilling","Exchange_Rate":0.000325,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"United States of America","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Uruguay","Currency":"Uruguayan Peso","Exchange_Rate":0.02415,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Uzbekistan","Currency":"Uzbekistan Sum","Exchange_Rate":0.000256,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Vanuatu","Currency":"Vatu","Exchange_Rate":0.005995,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Venezuela","Currency":"Bolivar Fuerte","Exchange_Rate":0.10108,"Earnings_threshold":10500,"Minimum_monthly_repayment":147.6},{"Country":"Vietnam","Currency":"Dong","Exchange_Rate":0.000033,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Virgin Islands (British)","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Virgin Islands (US)","Currency":"U.S. Dollar","Exchange_Rate":0.651585,"Earnings_threshold":14000,"Minimum_monthly_repayment":196.8},{"Country":"Wallis and Futuna Islands","Currency":"CFP Franc","Exchange_Rate":0.006111,"Earnings_threshold":17495,"Minimum_monthly_repayment":246},{"Country":"Western Sahara","Currency":"Moroccan Dirham","Exchange_Rate":0.06724,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Yemen","Currency":"Yemeni Rial","Exchange_Rate":0.003015,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Zambia","Currency":"Zambian Kwacha","Exchange_Rate":0.082437,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4},{"Country":"Zimbabwe","Currency":"Zimbabwean Dollar","Exchange_Rate":0.001791,"Earnings_threshold":7005,"Minimum_monthly_repayment":98.4}]}';
            obj = JSON.parse(plan1c);
  c = document.form.c.value;
    for (var i = 0; i < obj.Sheet1.length; i++){
      if (obj.Sheet1[i].Country == c){
        curr=obj.Sheet1[i].Currency;
      }
    }
      document.getElementById('curr').innerHTML=curr;
  }


  /************************************************************************************/
  /********************************* Plot ******************************/
  /************************************************************************************/

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});

  /************************************************************************************/
  /********************************* MLOANALERT FUNCTION ******************************/
  /************************************************************************************/
/*
function mloanalert(){
  var ys;

  ys = document.form.ys.value;

  var l;
  var paye = document.form.paye.value;

  l = document.form.l.value;

  if (ys>=1999 && l=="Northern Ireland") {
    loantype="Plan 1";
  }
  else if (ys>=1999 && l=="Scotland") {
    loantype="Plan 1";
  }
  else if (ys>=1999 && ys<=2012 && l=="Wales") {
    loantype="Plan 1";
  }
  else if (ys>=1999 && ys<=2012 && l=="England") {
    loantype="Plan 1";
  }
  else if (ys>2012 && l=="England" && pg=="No") {
    loantype="Plan 2";
  }
  else if (ys>2012 && l=="England" && pg=="Yes") {
    loantype="Postgraduate Loan";
  }
  else if (ys>2012 && l=="Wales") {
    loantype="Plan 2";
  }

  var elems = document.getElementsByClassName("hidden");
  for (var i=0;i<elems.length;i+=1){
    if (ys>2012 && l=="England") {
      elems[i].style.display="table-cell";
    }
  }

  var elems1 = document.getElementsByClassName("hidden1");
  for (var i=0;i<elems1.length;i+=1){
    if (loantype=="Plan 1" && (((l=="England" || l=="Northern Ireland" || l=="Wales") && ys<=2005) ||(l=="Scotland" && ys<=2006))) {
      elems1[i].style.display="table-cell";
    }
  }

  var elems = document.getElementsByClassName("hidden2");
  for (var i=0;i<elems.length;i+=1){
    if (paye=="Yes") {
      elems[i].style.display="table-cell";
    }
  }
}
*/