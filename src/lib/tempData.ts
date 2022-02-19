import { IPlaylist, IVideo, IVideoHasRange } from '../types'
import { ISearchSuccess } from './api/types'

export const temp_playlist: IPlaylist[] = [
  {
    id: 1,
    title: 'pop music',
    thumbnail:
      'https://www.liveabout.com/thmb/pwO4o_iDrZRTmmhs7eOfD25Qoqw=/1500x1125/smart/filters:no_upscale()/pop-music-57bce3863df78c87634ea806.jpg',
  },

  {
    id: 2,
    title: 'k-pop',
    thumbnail: 'https://freemusicdownloads.world/wp-content/uploads/2020/03/pop-music-1.jpg',
  },
  {
    id: 3,
    title: 'default',
    thumbnail:
      'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fd12b3eb0-10ec-11e8-aa39-e7299ff3a5e8.jpg?crop=3000%2C1687%2C0%2C156&resize=1200',
  },
  {
    id: 4,
    title: '이건 한글',
    thumbnail: 'https://wallpaperaccess.com/full/2742175.jpg',
  },
]

export const temp_searchResult: IVideo[] = [
  {
    videoId: 'videoId',
    title: 'title',
    thumbnail: 'thumbnail',
    channelTitle: 'channelTitle',
    duration: 'duration',
    channelAvatar: 'channelAvatar',
    views: 1,
    uploadedAt: 'uploadedAt',
  },
]

export const temp_videoHasRange: IVideoHasRange = {
  ...temp_searchResult[0],
  end: 100,
  start: 0,
}

export const temp_searchSuccess: ISearchSuccess = {
  data: {
    items: [
      {
        id: 'videoId',
        title: 'title',
        thumbnails: [
          {
            url: 'thumbnail',
          },
        ],
        bestThumbnail: {
          url: 'thumbnail',
        },
        author: {
          name: 'channelTitle',
          bestAvatar: {
            url: 'channelAvatar',
          },
        },
        duration: 'duration',
        views: 1,
        uploadedAt: 'uploadedAt',
      },
    ],
  },
}
