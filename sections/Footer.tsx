import Container from "@/components/Container";
import styles from "./Footer.module.css";
import { company } from "@/data/company";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
    id="footer"
    className={styles.footer}
>
      <Container>
        <div className={styles.grid}>
          {/* Logo */}

          <div>
            <Image
              src={company.logo}
              alt={company.name}
              width={180}
              height={60}
            />

            <p className={styles.slogan}>
              Thiết kế • Thi công • Nội thất
            </p>
          </div>

          {/* Dịch vụ */}

          <div>
            <h4>Dịch vụ</h4>

            <ul>
              <li>Thiết kế</li>
              <li>Thi công xây dựng</li>
              <li>Nội thất</li>
            </ul>
          </div>

          {/* Liên kết */}

          <div>
            <h4>Liên kết</h4>

            <ul>
              <li>Trang chủ</li>
              <li>Giới thiệu</li>
              <li>Dự án</li>
              <li>Liên hệ</li>
            </ul>
          </div>

          {/* Thông tin */}

          <div>
            <h4>Thông tin</h4>

            <ul>
              <li>{company.address}</li>
              <li>{company.hotline}</li>
              <li>{company.email}</li>
              <li>www.scons.vn</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          © 2026 S.CONS. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}