import Container from "./Container";
import styles from "./Footer.module.css";

import { company } from "@/data/company";
import { menus } from "@/data/menu";

export default function Footer() {
  return (
    <footer id="footer" data-test="abc123"   className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <img
              src={company.logo}
              alt={company.name}
              className={styles.logo}
            />

            <p className={styles.tagline}>
              Thiết kế • Thi công • Nội thất
            </p>
          </div>

          <div>
            <h3>Dịch vụ</h3>

            <ul>
              <li>Thiết kế</li>
              <li>Thi công xây dựng</li>
              <li>Nội thất</li>
            </ul>
          </div>

          <div>
            <h3>Liên kết</h3>

            <ul>
              {menus.map((menu) => (
                <li key={menu.name}>
                  <a href={menu.href}>{menu.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Thông tin</h3>

            <ul>
              <li>{company.address}</li>
              <li>{company.hotline}</li>
              <li>{company.email}</li>
              <li>{company.website}</li>
            </ul>
          </div>
        </div>

        <div className={styles.copy}>
          © 2026 S.CONS. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}