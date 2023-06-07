import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from './config'

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export const urlForImage = (source) =>
    imageBuilder.image(source).auto('format').fit('max')