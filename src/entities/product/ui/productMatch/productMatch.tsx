import { ProductType } from "entities/product/model";
import cn from "classnames";
import CustomButton, { ButtonViewType } from "shared/ui/customButton";
import Image from "./images/image.jpg";
import s from "./productMatch.module.scss";
import RouteLinkButton from "shared/ui/routeLinkButton";
import { AppPath } from "shared/config";
import { Grid2 } from "@mui/material";

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
      <Grid2 container spacing={2} columns={24}>
        <Grid2 size={4}>
          <div className={s.picture}>
            <img src={Image} alt="" />
          </div>
        </Grid2>
        <Grid2 size={20}>
          <div className={s.productData}>
            <div className={s.topBar}>
              <Grid2 container spacing={2} columns={24}>
                <Grid2>
                  <div className={s.title}>{name}</div>
                  <div className={s.article}>
                    <div className={s.articleitem}>
                    {marketpalce}
                    </div>
                    <div className={s.articleitem}>
                    Артикул: {article}
                    </div>
                  </div>
                </Grid2>
                <Grid2>
                  <div className={s.status}>{status}</div>
                </Grid2>
                <Grid2 offset={"auto"}>
                  <div className={s.textInfo}>Цена</div>
                  <div className={s.textInfo}>{price}</div>
                </Grid2>
                <Grid2>
                  <div className={cn(s.textInfo, s.alignRight)}>
                    {`Матч ${match}`}
                  </div>
                  <div className={cn(s.textInfo, s.alignRight)}>
                    {`${successRate}% успех`}
                  </div>
                </Grid2>
              </Grid2>
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
        </Grid2>
      </Grid2>
    </div>
  );
};

export { ProductMatch };
