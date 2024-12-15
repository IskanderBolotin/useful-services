import { ProductType } from "entities/product/model";
import cn from "classnames";
import CustomButton, { ButtonViewType } from "shared/ui/customButton";
import Image from "./images/image.jpg";
import s from "./productMatch.module.scss";
import RouteLinkButton from "shared/ui/routeLinkButton";
import { AppPath } from "shared/config";

type ProductMatchProps = {
  data: ProductType;
};

const ProductMatch: React.FC<ProductMatchProps> = ({ data }) => {
  const {
    // image,
    name,
    marketpalce,
    article,
    status,
    price,
    match,
    successRate,
    description,
  } = data;

  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <div className={s.image}>
          <div className={s.picture}>
            <img src={Image} alt="" />
          </div>
        </div>
        <div className={s.info}>
          <div className={s.productData}>
            <div className={s.topBar}>
              <div className={s.colTop}>
                <div className={s.title}>{name}</div>
                <div className={s.article}>
                  <div className={s.articleitem}>
                  {marketpalce}
                  </div>
                  <div className={s.articleitem}>
                  Артикул: {article}
                  </div>
                </div>
              </div>
              <div className={s.colTop}>
                <div className={s.status}>{status}</div>
              </div>
              <div className={cn(s.colTop, s.leftOffsetAuto)}>
                <div className={s.textInfo}>Цена</div>
                <div className={s.textInfo}>{price}</div>
              </div>
              <div className={s.colTop}>
                <div className={cn(s.textInfo, s.alignRight)}>
                  {`Матч ${match}`}
                </div>
                <div className={cn(s.textInfo, s.alignRight)}>
                  {`${successRate}% успех`}
                </div>
              </div>
            </div>
            <div className={s.bottomBar}>
              <div className={cn(s.colBottom, s.grow)}>
                <div className={s.description}>{description}</div>
              </div>
              <div className={s.colBottom}>
                <div className={s.btnWrapper}>
                  <div className={s.btnItem}>
                    <RouteLinkButton buttonViewType={ButtonViewType.Primary} to={AppPath.Match}>
                      Сопоставить
                    </RouteLinkButton>
                  </div>
                  <div className={s.btnItem}>
                    <CustomButton buttonViewType={ButtonViewType.CommonWarning}>
                      Удалить
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductMatch };
