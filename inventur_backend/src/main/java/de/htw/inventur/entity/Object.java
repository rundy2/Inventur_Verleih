package de.htw.inventur.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Object {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int sectionId;

    private int storageId;

    private int roomId;

    private String name;

    private int state;

    private int cond;

    private Date resDate;

    private Date backDate;

    private Date lendDate;

    public Object() {
    }

    public Object(int sectionId, int storageId, int roomId,  String name, int state, int cond, Date resDate, Date backDate, Date lendDate) {
        this.sectionId = sectionId;
        this.storageId = storageId;
        this.roomId = roomId;
        this.name = name;
        this.state = state;
        this.cond = cond;
        this.resDate = resDate;
        this.backDate = backDate;
        this.lendDate = lendDate;
    }

    public Object(String name, int sectionId, int storageId, int roomId) {
        this.name = name;
        this.sectionId = sectionId;
        this.storageId = storageId;
        this.roomId = roomId;
        this.state = 1;
        this.cond = 100;
        this.resDate = null;
        this.backDate = null;
        this.lendDate = null;
    }

    public int getStorageId() {
        return storageId;
    }

    public void setStorageId(int storageId) {
        this.storageId = storageId;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public int getSectionId() {
        return sectionId;
    }

    public void setSectionId(int sectionId) {
        this.sectionId = sectionId;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public int getCond() {
        return cond;
    }

    public void setCond(int condition) {
        this.cond = condition;
    }

    public Date getResDate() {
        return resDate;
    }

    public void setResDate(Date resDate) {
        this.resDate = resDate;
    }

    public Date getBackDate() {
        return backDate;
    }

    public void setBackDate(Date backDate) {
        this.backDate = backDate;
    }

    public Date getLendDate() {
        return lendDate;
    }

    public void setLendDate(Date lendDate) {
        this.lendDate = lendDate;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
