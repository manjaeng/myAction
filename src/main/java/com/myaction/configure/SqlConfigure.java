package com.myaction.configure;

import oracle.jdbc.pool.OracleDataSource;
import org.apache.ibatis.session.SqlSessionFactory;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Properties;

@Configuration
@EnableTransactionManagement
@MapperScan(basePackages = "com.myaction")
public class SqlConfigure {

    @Primary
    @Bean(name ="prodDataSource")
    @ConfigurationProperties(prefix="spring.datasource")
    DataSource dataSource() throws SQLException {
        return DataSourceBuilder.create().build();
    }

    @Bean
    public SqlSessionFactoryBean sqlSessionFactoryBean(@Qualifier("prodDataSource") DataSource dataSource) throws IOException {
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setDataSource(dataSource);
        factoryBean.setConfigurationProperties(mybatisProperties());
        return factoryBean;
    }

    private Properties mybatisProperties() {
        Properties properties = new Properties();
        properties.put("lazyLoadingEnabled", "true");
        return properties;
    }

    @Bean
    public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) throws Exception {
        return new SqlSessionTemplate(sqlSessionFactory);
    }
}