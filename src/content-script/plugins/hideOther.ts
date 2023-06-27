import { t } from '../../constants/i18n'
import { addCSS, generateHideCSS } from '../../utils/css'
import { BasePlugin } from './plugin'

export function hideOther(): BasePlugin {
  return {
    name: 'hideOther',
    description: t('plugin.hideOther.name'),
    default: true,
    init() {
      addCSS(
        generateHideCSS(
          `[aria-label="${t('symbol.CommunitiesNewItems')}"]`,
          `[aria-label="${t('symbol.Communities')}"]`,
          `[aria-label="${t('symbol.TwitterBlue')}"]`,
          `[aria-label="${t('symbol.Verified')}"]`,
          `[aria-label="${t('symbol.TimelineTrendingNow')}"]`,
          `[aria-label="${t('symbol.WhoToFollow')}"]`,
          // `[aria-label="${t('symbol.SearchAndExplore')}"]`,
          `[aria-label="${t('symbol.VerifiedOrganizations')}"]`,
          // submean
          '* > [href="/i/verified-orgs-signup"]',
          // sidebar
          // `[aria-label="${t('symbol.Trending')}"] > * > *:nth-child(3)`,
          `[aria-label="${t('symbol.Trending')}"] > * > *:nth-child(4)`,
          `[aria-label="${t('symbol.Trending')}"] > * > *:nth-child(5)`,
          // "Verified" tab
          '[role="presentation"]:has(> [href="/notifications/verified"][role="tab"])',
        ),
      )
    },
  }
}