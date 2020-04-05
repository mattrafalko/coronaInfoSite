const stateNameAndLinks = [
  {
    state: 'az',
    data: { stateName: 'Arizona', stateLink: 'https://az.gov/government-0' },
  },
  {
    state: 'al',
    data: {
      stateName: 'Alabama',
      stateLink:
        'https://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html',
    },
  },
  {
    state: 'ak',
    data: {
      stateName: 'Alaska',
      stateLink:
        'http://dhss.alaska.gov/dph/Epi/id/Pages/COVID-19/default.aspx',
    },
  },
  {
    state: 'ar',
    data: {
      stateName: 'Arkansas',
      stateLink:
        'https://www.healthy.arkansas.gov/programs-services/topics/novel-coronavirus',
    },
  },
  {
    state: 'ca',
    data: { stateName: 'California', stateLink: 'http://covid19.ca.gov/' },
  },
  {
    state: 'co',
    data: { stateName: 'Colorado', stateLink: 'https://covid19.colorado.gov' },
  },
  {
    state: 'ct',
    data: {
      stateName: 'Connecticut',
      stateLink: 'https://portal.ct.gov/Coronavirus',
    },
  },
  {
    state: 'dc',
    data: {
      stateName: 'District of Columbia',
      stateLink: 'https://coronavirus.dc.gov/',
    },
  },
  {
    state: 'de',
    data: {
      stateName: 'Delaware',
      stateLink: 'http://coronavirus.delaware.gov/',
    },
  },
  {
    state: 'fl',
    data: {
      stateName: 'Florida',
      stateLink: 'https://floridahealthcovid19.gov/#latest-stats',
    },
  },
  {
    state: 'ga',
    data: {
      stateName: 'Georgia',
      stateLink: 'https://georgia.gov/covid-19-state-services-georgia',
    },
  },
  {
    state: 'hi',
    data: { stateName: 'Hawaii', stateLink: 'https://hawaiicovid19.com/' },
  },
  {
    state: 'id',
    data: { stateName: 'Idaho', stateLink: 'https://coronavirus.idaho.gov/' },
  },
  {
    state: 'il',
    data: {
      stateName: 'Illinois',
      stateLink:
        'http://www2.illinois.gov/sites/coronavirus/Pages/default.aspx',
    },
  },
  {
    state: 'in',
    data: {
      stateName: 'Indiana',
      stateLink: 'https://www.in.gov/coronavirus/',
    },
  },
  {
    state: 'ia',
    data: { stateName: 'Iowa', stateLink: 'https://coronavirus.iowa.gov/' },
  },
  {
    state: 'ks',
    data: {
      stateName: 'Kansas',
      stateLink:
        'http://www.kdheks.gov/coronavirus/COVID-19_Resource_Center.htm',
    },
  },
  {
    state: 'ky',
    data: {
      stateName: 'Kentucky',
      stateLink: 'https://govstatus.egov.com/kycovid19',
    },
  },
  {
    state: 'la',
    data: {
      stateName: 'Louisiana',
      stateLink: 'http://ldh.la.gov/Coronavirus/',
    },
  },
  {
    state: 'ma',
    data: {
      stateName: 'Massachusetts',
      stateLink:
        'https://www.mass.gov/info-details/covid-19-state-of-emergency',
    },
  },
  {
    state: 'md',
    data: {
      stateName: 'Maryland',
      stateLink: 'https://governor.maryland.gov/coronavirus/',
    },
  },
  {
    state: 'me',
    data: {
      stateName: 'Maine',
      stateLink: 'https://www.maine.gov/governor/mills/covid-19',
    },
  },
  {
    state: 'mi',
    data: {
      stateName: 'Michigan',
      stateLink: 'https://www.michigan.gov/coronavirus/',
    },
  },
  {
    state: 'mn',
    data: {
      stateName: 'Minnesota',
      stateLink: 'https://mn.gov/governor/covid-19/',
    },
  },
  {
    state: 'ms',
    data: {
      stateName: 'Mississippi',
      stateLink: 'https://msdh.ms.gov/msdhsite/_static/14,0,420.html',
    },
  },
  {
    state: 'mo',
    data: {
      stateName: 'Missouri',
      stateLink:
        'https://health.mo.gov/living/healthcondiseases/communicable/novel-coronavirus/',
    },
  },
  {
    state: 'mt',
    data: { stateName: 'Montana', stateLink: 'https://covid19.mt.gov/' },
  },
  {
    state: 'ne',
    data: {
      stateName: 'Nebraska',
      stateLink: 'https://www.nebraskamed.com/COVID',
    },
  },
  {
    state: 'nc',
    data: {
      stateName: 'North Carolina',
      stateLink: 'https://www.ncdhhs.gov/divisions/public-health/covid19',
    },
  },
  {
    state: 'nv',
    data: { stateName: 'Nevada', stateLink: 'http://dpbh.nv.gov/coronavirus/' },
  },
  {
    state: 'nd',
    data: {
      stateName: 'North Dakota',
      stateLink: 'https://ndresponse.gov/covid-19-resources',
    },
  },
  {
    state: 'nh',
    data: {
      stateName: 'New Hampshire',
      stateLink: 'https://www.nh.gov/covid19/',
    },
  },
  {
    state: 'nj',
    data: { stateName: 'New Jersey', stateLink: 'http://covid19.nj.gov/' },
  },
  {
    state: 'nm',
    data: { stateName: 'New Mexico', stateLink: 'https://cv.nmhealth.org/' },
  },
  {
    state: 'ny',
    data: {
      stateName: 'New York',
      stateLink: 'http://coronavirus.health.ny.gov/home',
    },
  },
  {
    state: 'oh',
    data: { stateName: 'Ohio', stateLink: 'http://coronavirus.ohio.gov/' },
  },
  {
    state: 'ok',
    data: {
      stateName: 'Oklahoma',
      stateLink: 'https://coronavirus.health.ok.gov/',
    },
  },
  {
    state: 'or',
    data: {
      stateName: 'Oregon',
      stateLink: 'https://govstatus.egov.com/or-covid-19',
    },
  },
  {
    state: 'pa',
    data: {
      stateName: 'Pennsylvania',
      stateLink:
        'https://www.health.pa.gov/topics/disease/coronavirus/Pages/Coronavirus.aspx',
    },
  },
  {
    state: 'ri',
    data: {
      stateName: 'Rhode Island',
      stateLink: 'https://health.ri.gov/covid/',
    },
  },
  {
    state: 'sd',
    data: {
      stateName: 'South Dakota',
      stateLink: 'https://doh.sd.gov/news/coronavirus.aspx',
    },
  },
  {
    state: 'sc',
    data: {
      stateName: 'South Carolina',
      stateLink:
        'https://www.scdhec.gov/infectious-diseases/viruses/coronavirus-disease-2019-covid-19',
    },
  },
  {
    state: 'tn',
    data: {
      stateName: 'Tennessee',
      stateLink: 'https://www.tn.gov/governor/covid-19.html',
    },
  },
  {
    state: 'tx',
    data: { stateName: 'Texas', stateLink: 'https://texas.gov/#covid19' },
  },
  {
    state: 'ut',
    data: { stateName: 'Utah', stateLink: 'https://coronavirus.utah.gov/' },
  },
  {
    state: 'va',
    data: {
      stateName: 'Virginia',
      stateLink: 'https://www.virginia.gov/coronavirus-updates/',
    },
  },
  {
    state: 'vt',
    data: {
      stateName: 'Vermont',
      stateLink:
        'https://www.healthvermont.gov/response/infectious-disease/2019-novel-coronavirus',
    },
  },
  {
    state: 'wa',
    data: {
      stateName: 'Washington',
      stateLink: 'https://www.coronavirus.wa.gov/',
    },
  },
  {
    state: 'wy',
    data: {
      stateName: 'Wyoming',
      stateLink: 'https://health.wyo.gov/',
    },
  },
  {
    state: 'wi',
    data: {
      stateName: 'Wisconsin',
      stateLink: 'https://www.dhs.wisconsin.gov/covid-19/index.htm',
    },
  },
  {
    state: 'wv',
    data: {
      stateName: 'West Virginia',
      stateLink: 'https://dhhr.wv.gov/COVID-19/Pages/default.aspx',
    },
  },
  {
    state: 'pr',
    data: {
      stateName: 'Puerto Rico',
      stateLink:
        'https://www.fns.usda.gov/contact/puerto-rico-department-health',
    },
  },
  {
    state: 'gu',
    data: {
      stateName: 'Guam',
      stateLink: 'https://ghs.guam.gov/coronavirus-covid-19',
    },
  },
  {
    state: 'vi',
    data: {
      stateName: 'Virgin Islands',
      stateLink: 'https://doh.vi.gov/covid19usvi',
    },
  },
  {
    state: 'as',
    data: {
      stateName: 'American Samoa',
      stateLink: 'https://www.who.int/americansamoa',
    },
  },
];

export default stateNameAndLinks;
