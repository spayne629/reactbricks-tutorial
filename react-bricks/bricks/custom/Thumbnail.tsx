import { types, Text, RichText, Link, Image } from 'react-bricks/rsc'

export interface ThumbnailProps {
  title: types.TextValue
  description: types.TextValue
  image: types.IImageSource
  hasShadow: boolean
  bgColor: types.IColor & { className: string }
}

const Thumbnail: types.Brick<ThumbnailProps> = ({ title, description, image, hasShadow, bgColor }) => {
  return (
    <div
        className={`my-6 mx-6 p-6 text-center w-1/3 border rounded-lg ${hasShadow ? 'shadow-xl' : ''
        } ${bgColor?.className}`}
    >

        <Image
            propName="image"
            source={image}
            alt="Fallback alt tag"
            maxWidth={600}
            imageClassName="mb-6"
        />

      <Text
        propName="title"
        value={title}
        renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1>}
        placeholder="Type a title..."
      />

      <RichText
        propName="description"
        value={description}
        renderBlock={({ children }) => (
          <p className="text-lg text-gray-500">{children}</p>
        )}
        placeholder="Type a description"
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Link,
        ]}
        renderHighlight={({ children }) => (
            <span className="px-1 rounded bg-blue-200 text-blue-900">
                {children}
            </span>
        )}
        renderLink={({ children, href, target, rel }) => (
            <Link
                href={href}
                target={target}
                rel={rel}
                className="text-sky-500 hover:text-sky-600 transition-colors"
            >
                {children}
            </Link>
        )}
      />
    </div>
  )
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',  
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    title: "Wello, horld!",
    description: "Lorem nobody ipsum cares.",
    hasShadow: true,
    bgColor: { color: '#ffffff', className: 'bg-white' },
    image: {
      hashId: "Ouz2qsqgOA4dpiu",
      src: "https://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/original/gnUEpp08NCispOG.webp",
      srcSet: "https://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/src_set/gnUEpp08NCispOG-1200.webp 1200w,\nhttps://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/src_set/gnUEpp08NCispOG-900.webp 900w,\nhttps://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/src_set/gnUEpp08NCispOG-600.webp 600w,\nhttps://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/src_set/gnUEpp08NCispOG-300.webp 300w,\nhttps://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/src_set/gnUEpp08NCispOG-150.webp 150w",
      type: "image/webp",
      placeholderSrc: "https://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/placeholder/gnUEpp08NCispOG.jpg",
      fallbackSrc: "https://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/original/gnUEpp08NCispOG.jpg",
      fallbackSrcSet: "https://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/src_set/gnUEpp08NCispOG-1200.jpg 1200w,\nhttps://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/src_set/gnUEpp08NCispOG-900.jpg 900w,\nhttps://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/src_set/gnUEpp08NCispOG-600.jpg 600w,\nhttps://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/src_set/gnUEpp08NCispOG-300.jpg 300w,\nhttps://assets.reactbricks.com/Lum3Lr-uF7BZMYa/images/src_set/gnUEpp08NCispOG-150.jpg 150w",
      fallbackType: "image/jpeg",
      height: 854,
      width: 1280,
      alt: "cancelled stamp on wall mural",
      seoName: "followyourdreams",
      crop: {
        x: 0,
        y: 0,
        width: 1280,
        height: 854
      },
      transform: {
        rotate: 0,
        flip: {
          horizontal: false,
          vertical: false
        }
      }
    }
  }),
  sideEditProps: [
    {
        name: 'hasShadow',
        label: 'Shadow',
        type: types.SideEditPropType.Boolean,
    },
    {
        name: 'bgColor',
        label: 'Background',
        type: types.SideEditPropType.Select,
        selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
                {
                    label: 'White',
                    value: { color: '#ffffff', className: 'bg-white' },
                },
                {
                    label: 'Light blue',
                    value: { color: '#eff6ff', className: 'bg-blue-50' },
                },
            ],
        },
    },
  ],
}

export default Thumbnail
