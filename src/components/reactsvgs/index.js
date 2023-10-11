"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Dlp = _interopRequireDefault(require("./Dlp"));

var _AccountAnalyticsLogo = _interopRequireDefault(require("./AccountAnalyticsLogo"));

var _AddMember = _interopRequireDefault(require("./AddMember"));

var _Add = _interopRequireDefault(require("./Add"));

var _ApiSecurity = _interopRequireDefault(require("./ApiSecurity"));

var _Api = _interopRequireDefault(require("./Api"));

var _Applications = _interopRequireDefault(require("./Applications"));

var _ArrowExternalLink = _interopRequireDefault(require("./ArrowExternalLink"));

var _Backward = _interopRequireDefault(require("./Backward"));

var _Bolt = _interopRequireDefault(require("./Bolt"));

var _Byoip = _interopRequireDefault(require("./Byoip"));

var _Calendar = _interopRequireDefault(require("./Calendar"));

var _Carbon = _interopRequireDefault(require("./Carbon"));

var _CaretDoubleLeft = _interopRequireDefault(require("./CaretDoubleLeft"));

var _CaretDoubleRight = _interopRequireDefault(require("./CaretDoubleRight"));

var _CaretDown = _interopRequireDefault(require("./CaretDown"));

var _CaretLeft = _interopRequireDefault(require("./CaretLeft"));

var _CaretRight = _interopRequireDefault(require("./CaretRight"));

var _CaretUp = _interopRequireDefault(require("./CaretUp"));

var _CaseStudy = _interopRequireDefault(require("./CaseStudy"));

var _Chart = _interopRequireDefault(require("./Chart"));

var _Clipboard = _interopRequireDefault(require("./Clipboard"));

var _CloudflareAccess = _interopRequireDefault(require("./CloudflareAccess"));

var _CloudflareDex = _interopRequireDefault(require("./CloudflareDex"));

var _CloudflareMagicWan = _interopRequireDefault(require("./CloudflareMagicWan"));

var _CloudflareSecurityApplication = _interopRequireDefault(require("./CloudflareSecurityApplication"));

var _CloudflareSecurityNetwork = _interopRequireDefault(require("./CloudflareSecurityNetwork"));

var _CloudflareZeroTrust = _interopRequireDefault(require("./CloudflareZeroTrust"));

var _Copy = _interopRequireDefault(require("./Copy"));

var _CreditCard = _interopRequireDefault(require("./CreditCard"));

var _D = _interopRequireDefault(require("./D1"));

var _DdosAttack = _interopRequireDefault(require("./DdosAttack"));

var _Discord = _interopRequireDefault(require("./Discord"));

var _Discover = _interopRequireDefault(require("./Discover"));

var _Documentation = _interopRequireDefault(require("./Documentation"));

var _Download = _interopRequireDefault(require("./Download"));

var _Drive = _interopRequireDefault(require("./Drive"));

var _Edgeworker = _interopRequireDefault(require("./Edgeworker"));

var _Edit = _interopRequireDefault(require("./Edit"));

var _EmailForwarding = _interopRequireDefault(require("./EmailForwarding"));

var _ExclamationSign = _interopRequireDefault(require("./ExclamationSign"));

var _ExternalLink = _interopRequireDefault(require("./ExternalLink"));

var _Eye = _interopRequireDefault(require("./Eye"));

var _Facebook = _interopRequireDefault(require("./Facebook"));

var _File = _interopRequireDefault(require("./File"));

var _Filter = _interopRequireDefault(require("./Filter"));

var _FirewallRules = _interopRequireDefault(require("./FirewallRules"));

var _Flowchart = _interopRequireDefault(require("./Flowchart"));

var _Folder = _interopRequireDefault(require("./Folder"));

var _Forward = _interopRequireDefault(require("./Forward"));

var _Funnel = _interopRequireDefault(require("./Funnel"));

var _Gateway = _interopRequireDefault(require("./Gateway"));

var _Gear = _interopRequireDefault(require("./Gear"));

var _GitBranch = _interopRequireDefault(require("./GitBranch"));

var _Github = _interopRequireDefault(require("./Github"));

var _Globe = _interopRequireDefault(require("./Globe"));

var _Hamburger = _interopRequireDefault(require("./Hamburger"));

var _Help = _interopRequireDefault(require("./Help"));

var _Home = _interopRequireDefault(require("./Home"));

var _Image = _interopRequireDefault(require("./Image"));

var _InfoSign = _interopRequireDefault(require("./InfoSign"));

var _InternetBrowser = _interopRequireDefault(require("./InternetBrowser"));

var _Key = _interopRequireDefault(require("./Key"));

var _Leaf = _interopRequireDefault(require("./Leaf"));

var _Left = _interopRequireDefault(require("./Left"));

var _Link = _interopRequireDefault(require("./Link"));

var _Linkedin = _interopRequireDefault(require("./Linkedin"));

var _List = _interopRequireDefault(require("./List"));

var _Lock = _interopRequireDefault(require("./Lock"));

var _Logs = _interopRequireDefault(require("./Logs"));

var _MagicFirewall = _interopRequireDefault(require("./MagicFirewall"));

var _MagicTransitLogo = _interopRequireDefault(require("./MagicTransitLogo"));

var _Mail = _interopRequireDefault(require("./Mail"));

var _Minus = _interopRequireDefault(require("./Minus"));

var _More = _interopRequireDefault(require("./More"));

var _NetworkAnalyticsLogo = _interopRequireDefault(require("./NetworkAnalyticsLogo"));

var _NetworkSecurity = _interopRequireDefault(require("./NetworkSecurity"));

var _Network = _interopRequireDefault(require("./Network"));

var _None = _interopRequireDefault(require("./None"));

var _Notifications = _interopRequireDefault(require("./Notifications"));

var _OfficeBranch = _interopRequireDefault(require("./OfficeBranch"));

var _OkSign = _interopRequireDefault(require("./OkSign"));

var _Ok = _interopRequireDefault(require("./Ok"));

var _OptimizationScale = _interopRequireDefault(require("./OptimizationScale"));

var _PagesLogo = _interopRequireDefault(require("./PagesLogo"));

var _Pause = _interopRequireDefault(require("./Pause"));

var _PlatformApps = _interopRequireDefault(require("./PlatformApps"));

var _Plus = _interopRequireDefault(require("./Plus"));

var _Printer = _interopRequireDefault(require("./Printer"));

var _ProductSecurityCenter = _interopRequireDefault(require("./ProductSecurityCenter"));

var _PubSub = _interopRequireDefault(require("./PubSub"));

var _PullRequest = _interopRequireDefault(require("./PullRequest"));

var _Queues = _interopRequireDefault(require("./Queues"));

var _R = _interopRequireDefault(require("./R2"));

var _Refresh = _interopRequireDefault(require("./Refresh"));

var _RegistrarLogo = _interopRequireDefault(require("./RegistrarLogo"));

var _ReliabilityDns = _interopRequireDefault(require("./ReliabilityDns"));

var _ReliabilityLoadBalancer = _interopRequireDefault(require("./ReliabilityLoadBalancer"));

var _Remove = _interopRequireDefault(require("./Remove"));

var _Reorder = _interopRequireDefault(require("./Reorder"));

var _ResizeHorizontal = _interopRequireDefault(require("./ResizeHorizontal"));

var _Retarget = _interopRequireDefault(require("./Retarget"));

var _Revert = _interopRequireDefault(require("./Revert"));

var _Right = _interopRequireDefault(require("./Right"));

var _Script = _interopRequireDefault(require("./Script"));

var _Search = _interopRequireDefault(require("./Search"));

var _SecurityBots = _interopRequireDefault(require("./SecurityBots"));

var _SecurityWaf = _interopRequireDefault(require("./SecurityWaf"));

var _Shield = _interopRequireDefault(require("./Shield"));

var _Spectrum = _interopRequireDefault(require("./Spectrum"));

var _Speech = _interopRequireDefault(require("./Speech"));

var _StarOutline = _interopRequireDefault(require("./StarOutline"));

var _Star = _interopRequireDefault(require("./Star"));

var _Stream = _interopRequireDefault(require("./Stream"));

var _Subtract = _interopRequireDefault(require("./Subtract"));

var _TailWorker = _interopRequireDefault(require("./TailWorker"));

var _Teams = _interopRequireDefault(require("./Teams"));

var _Terraform = _interopRequireDefault(require("./Terraform"));

var _Time = _interopRequireDefault(require("./Time"));

var _Trace = _interopRequireDefault(require("./Trace"));

var _TrafficAttackBrowser = _interopRequireDefault(require("./TrafficAttackBrowser"));

var _Turnstile = _interopRequireDefault(require("./Turnstile"));

var _Twitter = _interopRequireDefault(require("./Twitter"));

var _TwoWay = _interopRequireDefault(require("./TwoWay"));

var _UnlockOutline = _interopRequireDefault(require("./UnlockOutline"));

var _Upload = _interopRequireDefault(require("./Upload"));

var _UserMulti = _interopRequireDefault(require("./UserMulti"));

var _UserOutline = _interopRequireDefault(require("./UserOutline"));

var _User = _interopRequireDefault(require("./User"));

var _Version = _interopRequireDefault(require("./Version"));

var _WaitingRoom = _interopRequireDefault(require("./WaitingRoom"));

var _WebAnalyticsLogo = _interopRequireDefault(require("./WebAnalyticsLogo"));

var _Web = _interopRequireDefault(require("./Web3"));

var _WorkersBundled = _interopRequireDefault(require("./WorkersBundled"));

var _WorkersConstellation = _interopRequireDefault(require("./WorkersConstellation"));

var _WorkersDurableObjects = _interopRequireDefault(require("./WorkersDurableObjects"));

var _WorkersForPlatforms = _interopRequireDefault(require("./WorkersForPlatforms"));

var _WorkersKv = _interopRequireDefault(require("./WorkersKv"));

var _WorkersPages = _interopRequireDefault(require("./WorkersPages"));

var _WorkersUnbound = _interopRequireDefault(require("./WorkersUnbound"));

var _Wrangler = _interopRequireDefault(require("./Wrangler"));

var _Wrench = _interopRequireDefault(require("./Wrench"));

var _Youtube = _interopRequireDefault(require("./Youtube"));

var _Zaraz = _interopRequireDefault(require("./Zaraz"));

var _ZerotrustCasbLogo = _interopRequireDefault(require("./ZerotrustCasbLogo"));

var _ZerotrustNetworksLogo = _interopRequireDefault(require("./ZerotrustNetworksLogo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  dlp: _Dlp.default,
  'account-analytics-logo': _AccountAnalyticsLogo.default,
  'add-member': _AddMember.default,
  add: _Add.default,
  'api-security': _ApiSecurity.default,
  api: _Api.default,
  applications: _Applications.default,
  'arrow-external-link': _ArrowExternalLink.default,
  backward: _Backward.default,
  bolt: _Bolt.default,
  byoip: _Byoip.default,
  calendar: _Calendar.default,
  carbon: _Carbon.default,
  'caret-double-left': _CaretDoubleLeft.default,
  'caret-double-right': _CaretDoubleRight.default,
  'caret-down': _CaretDown.default,
  'caret-left': _CaretLeft.default,
  'caret-right': _CaretRight.default,
  'caret-up': _CaretUp.default,
  'case-study': _CaseStudy.default,
  chart: _Chart.default,
  clipboard: _Clipboard.default,
  'cloudflare-access': _CloudflareAccess.default,
  'cloudflare-dex': _CloudflareDex.default,
  'cloudflare-magic-wan': _CloudflareMagicWan.default,
  'cloudflare-security-application': _CloudflareSecurityApplication.default,
  'cloudflare-security-network': _CloudflareSecurityNetwork.default,
  'cloudflare-zero-trust': _CloudflareZeroTrust.default,
  copy: _Copy.default,
  'credit-card': _CreditCard.default,
  d1: _D.default,
  'ddos-attack': _DdosAttack.default,
  discord: _Discord.default,
  discover: _Discover.default,
  documentation: _Documentation.default,
  download: _Download.default,
  drive: _Drive.default,
  edgeworker: _Edgeworker.default,
  edit: _Edit.default,
  'email-forwarding': _EmailForwarding.default,
  'exclamation-sign': _ExclamationSign.default,
  'external-link': _ExternalLink.default,
  eye: _Eye.default,
  facebook: _Facebook.default,
  file: _File.default,
  filter: _Filter.default,
  'firewall-rules': _FirewallRules.default,
  flowchart: _Flowchart.default,
  folder: _Folder.default,
  forward: _Forward.default,
  funnel: _Funnel.default,
  gateway: _Gateway.default,
  gear: _Gear.default,
  'git-branch': _GitBranch.default,
  github: _Github.default,
  globe: _Globe.default,
  hamburger: _Hamburger.default,
  help: _Help.default,
  home: _Home.default,
  image: _Image.default,
  'info-sign': _InfoSign.default,
  'internet-browser': _InternetBrowser.default,
  key: _Key.default,
  leaf: _Leaf.default,
  left: _Left.default,
  link: _Link.default,
  linkedin: _Linkedin.default,
  list: _List.default,
  lock: _Lock.default,
  logs: _Logs.default,
  'magic-firewall': _MagicFirewall.default,
  'magic-transit-logo': _MagicTransitLogo.default,
  mail: _Mail.default,
  minus: _Minus.default,
  more: _More.default,
  'network-analytics-logo': _NetworkAnalyticsLogo.default,
  'network-security': _NetworkSecurity.default,
  network: _Network.default,
  none: _None.default,
  notifications: _Notifications.default,
  'office-branch': _OfficeBranch.default,
  'ok-sign': _OkSign.default,
  ok: _Ok.default,
  'optimization-scale': _OptimizationScale.default,
  'pages-logo': _PagesLogo.default,
  pause: _Pause.default,
  'platform-apps': _PlatformApps.default,
  plus: _Plus.default,
  printer: _Printer.default,
  'product-security-center': _ProductSecurityCenter.default,
  'pub-sub': _PubSub.default,
  'pull-request': _PullRequest.default,
  queues: _Queues.default,
  r2: _R.default,
  refresh: _Refresh.default,
  'registrar-logo': _RegistrarLogo.default,
  'reliability-dns': _ReliabilityDns.default,
  'reliability-load-balancer': _ReliabilityLoadBalancer.default,
  remove: _Remove.default,
  reorder: _Reorder.default,
  'resize-horizontal': _ResizeHorizontal.default,
  retarget: _Retarget.default,
  revert: _Revert.default,
  right: _Right.default,
  script: _Script.default,
  search: _Search.default,
  'security-bots': _SecurityBots.default,
  'security-waf': _SecurityWaf.default,
  shield: _Shield.default,
  spectrum: _Spectrum.default,
  speech: _Speech.default,
  'star-outline': _StarOutline.default,
  star: _Star.default,
  stream: _Stream.default,
  subtract: _Subtract.default,
  'tail-worker': _TailWorker.default,
  teams: _Teams.default,
  terraform: _Terraform.default,
  time: _Time.default,
  trace: _Trace.default,
  'traffic-attack-browser': _TrafficAttackBrowser.default,
  turnstile: _Turnstile.default,
  twitter: _Twitter.default,
  'two-way': _TwoWay.default,
  'unlock-outline': _UnlockOutline.default,
  upload: _Upload.default,
  'user-multi': _UserMulti.default,
  'user-outline': _UserOutline.default,
  user: _User.default,
  version: _Version.default,
  'waiting-room': _WaitingRoom.default,
  'web-analytics-logo': _WebAnalyticsLogo.default,
  web3: _Web.default,
  'workers-bundled': _WorkersBundled.default,
  'workers-constellation': _WorkersConstellation.default,
  'workers-durable-objects': _WorkersDurableObjects.default,
  'workers-for-platforms': _WorkersForPlatforms.default,
  'workers-kv': _WorkersKv.default,
  'workers-pages': _WorkersPages.default,
  'workers-unbound': _WorkersUnbound.default,
  wrangler: _Wrangler.default,
  wrench: _Wrench.default,
  youtube: _Youtube.default,
  zaraz: _Zaraz.default,
  'zerotrust-casb-logo': _ZerotrustCasbLogo.default,
  'zerotrust-networks-logo': _ZerotrustNetworksLogo.default
};
exports.default = _default;